import styled from 'styled-components'

export default function Navigation ({navItems = [], children}) {
    const visibleNavItems = navItems.filter(item => item.title?.toLowerCase() !== 'about')

    return(
        <NavBar>
            <TitleBlock onClick={()=>{window.location.reload()}}>
                <SiteName>{children}</SiteName>
                <Deck>interactive county overview</Deck>
            </TitleBlock>

            {visibleNavItems.length > 0 && (
                <NavLinks>
                    {visibleNavItems.map(item => (
                        <NavItem key={item.title || item.url}>
                            <a href={item.url}>{item.title}</a>
                        </NavItem>
                    ))}
                </NavLinks>
            )}
        </NavBar>
    )
}

const NavBar = styled.nav`
    width: 85vw;
    max-width: 1700px;
    min-height: 74px;
    margin: 0 auto 18px;
    padding: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 28px;
    background: transparent;
    border-bottom: 1px solid rgba(149, 252, 242, 0.24);

    @media (max-width: 767px) {
        width: 95vw;
        min-height: 54px;
        margin-bottom: 10px;
        gap: 12px;
        align-items: flex-end;
    }
`

const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 6px;
    min-width: 0;
    padding: 0 0 14px;
    cursor: pointer;

    @media (max-width: 767px) {
        gap: 3px;
        padding-bottom: 8px;
        flex: 1 1 auto;
    }
`

const SiteName = styled.h1`
    margin: 0;
    padding: 0;
    color: #95fcf2;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: clamp(2rem, 4.1vw, 4.4rem);
    line-height: .86;
    font-weight: 900;
    letter-spacing: -.075em;
    text-shadow: none;
    transition: color 160ms ease;

    ${TitleBlock}:hover &{
        color: white;
    }

    @media (max-width: 767px) {
        font-size: clamp(1.35rem, 9vw, 2rem);
        line-height: .9;
        letter-spacing: -.065em;
    }
`

const Deck = styled.p`
    margin: 0;
    padding: 0;
    color: rgba(245, 253, 253, 0.58);
    font-size: .72rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 2.4px;
    text-align: left;
    text-transform: uppercase;
    white-space: nowrap;

    @media (max-width: 767px) {
        font-size: .46rem;
        line-height: .65rem;
        letter-spacing: 1px;
        color: rgba(245, 253, 253, 0.42);
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 18px;
    margin: 0;
    padding: 0 0 16px;

    @media (max-width: 767px) {
        gap: 10px;
        padding-bottom: 8px;
        flex: 0 0 auto;
    }
`

const NavItem = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;

    & > a {
        display: block;
        color: rgba(245, 253, 253, 0.72);
        text-decoration: none;
        font-size: .78rem;
        line-height: 1rem;
        font-weight: 800;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        transition:
            color 160ms ease,
            transform 160ms ease;
    }

    & > a:hover {
        color: #95fcf2;
        transform: translateY(-2px);
    }

    @media (max-width: 767px) {
        & > a {
            font-size: .58rem;
            line-height: .8rem;
            letter-spacing: .9px;
        }
    }
`