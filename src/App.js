import './App.css';
import styled from 'styled-components'
import Navigation from './components/Navigation'
import DisplayBox from './components/DisplayBox'
import {data} from './data/countyDescriptions.js'

const navItems=[{title: 'About this app', url: null}, {title: 'Contact', url: null}]

export default function App() {
  return (
    <Layout className="App">
        <Navigation navItems={navItems}>Arizona Urbanizes</ Navigation>
        <DisplayBox data={data} />
    </Layout>
  );
}

const Layout = styled.div`
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