import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()

const INCLUDE_EXTENSIONS = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
  '.md',
  '.mdx',
  '.html'
])

const IGNORE_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build',
  'out'
])

const MAX_CONCURRENT = 8

async function walk (dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue

    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...await walk(fullPath))
    } else if (INCLUDE_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath)
    }
  }

  return files
}

function extractLinks (content) {
  const links = new Set()

  const patterns = [
    /href=['"]([^'"]+)['"]/g,
    /src=['"]([^'"]+)['"]/g,
    /\]\((https?:\/\/[^)\s]+)\)/g,
    /(https?:\/\/[^\s"'<>),]+)/g
  ]

  for (const pattern of patterns) {
    let match
    while ((match = pattern.exec(content)) !== null) {
      const link = match[1]
      if (!link) continue
      if (link.startsWith('#')) continue
      if (link.startsWith('mailto:')) continue
      if (link.startsWith('tel:')) continue
      links.add(link)
    }
  }

  return [...links]
}

async function checkUrl (url) {
  try {
    let res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(10000),
      headers: {
        'user-agent': 'Mozilla/5.0 link-checker'
      }
    })

    // Some sites reject HEAD even when the page exists.
    if ([403, 405, 429].includes(res.status)) {
      res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
        headers: {
          'user-agent': 'Mozilla/5.0 link-checker'
        }
      })
    }

    return {
      ok: res.status >= 200 && res.status < 400,
      status: res.status,
      finalUrl: res.url
    }
  } catch (error) {
    return {
      ok: false,
      status: 'ERROR',
      error: error.message
    }
  }
}

async function runLimited (items, worker, limit) {
  const results = []
  let index = 0

  async function next () {
    const current = index++
    if (current >= items.length) return

    results[current] = await worker(items[current])
    await next()
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, next)
  )

  return results
}

const files = await walk(ROOT)
const records = []

for (const file of files) {
  const content = await fs.readFile(file, 'utf8')
  const links = extractLinks(content)

  for (const link of links) {
    records.push({
      file: path.relative(ROOT, file),
      link
    })
  }
}

const external = records.filter(record => /^https?:\/\//.test(record.link))
const internal = records.filter(record => record.link.startsWith('/'))

console.log(`Found ${records.length} total links`)
console.log(`External: ${external.length}`)
console.log(`Internal/root-relative: ${internal.length}`)
console.log('Checking external links...\n')

const checked = await runLimited(
  external,
  async record => ({
    ...record,
    result: await checkUrl(record.link)
  }),
  MAX_CONCURRENT
)

const bad = checked.filter(item => !item.result.ok)

if (bad.length === 0) {
  console.log('No dead external links found.')
} else {
  console.log(`Dead/problem external links: ${bad.length}\n`)

  for (const item of bad) {
    console.log(`${item.result.status} | ${item.link}`)
    console.log(`  in ${item.file}`)
    if (item.result.error) console.log(`  ${item.result.error}`)
    console.log('')
  }
}

if (internal.length > 0) {
  console.log('\nInternal/root-relative links found. Check these against your actual routes/assets:')
  for (const item of internal) {
    console.log(`${item.link} | ${item.file}`)
  }
}