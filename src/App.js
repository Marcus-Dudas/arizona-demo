import './App.css'; //All child components are styled w/styled-components, though
import Navigation from './components/Navigation'
import DisplayBox from './components/DisplayBox'

const navItems=[{title: 'About this app', url: null}, {title: 'Contact', url: null}]

export default function App() {
  return (
    <div className="App">
        <Navigation navItems={navItems}>Arizona Demographics</ Navigation>
        <DisplayBox />
    </div>
  );
}


