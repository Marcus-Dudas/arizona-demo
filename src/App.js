import './App.css';
import styled from 'styled-components'
import Navigation from './components/Navigation'
import DisplayBox from './components/DisplayBox'
import {data} from './data/countyDescriptions.js'

const navItems=[{title: 'About', url: null}] //Next.js url paths.

export default function App() {
  return (
    <Layout className="App">
        <Navigation navItems={navItems}>AZ in 3D</ Navigation>
        <DisplayBox data={data} />
    </Layout>
  );
}

const Layout = styled.div`
@media (aspect-ratio: 1/1) {
  font-size: small;
  display: flex;
  flex-direction: column;
  align-content: center;
}
@media (max-width: 1366px) {
  font-size: small;
  display: flex;
  flex-direction: column;
  align-content: center;
}

@media (max-width: 1024px) {
  font-size: x-small;
  display: flex;
  flex-direction: column;
  align-content: center;
}

@media (max-width: 767px) {
  font-size: xx-small;
}
`;