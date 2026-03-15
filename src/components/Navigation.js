import styled from 'styled-components'
import decal from "../img/angles.png"


export default function Navigation ({navItems, children}) {
    const links = composeNavLinks(navItems);
    return(
        <NavBar>
            <SiteName onClick={()=>{window.location.reload()}}>{children}</SiteName>
            <Decal src={decal} alt="site title decal"/>

        </NavBar>
    )
};

//helpers___________________________________________

function composeNavLinks (items) {
    const navHTML = items.map(
                i => <NavItem><a href={i.url}>{i.title}</a></NavItem>
                             )
    return navHTML
};


//styles______________________________________________
const NavBar = styled.div`
    
    margin: 0;
    padding: 0;
    width: 80%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px 10px 10px 10px;
`;
const SiteName = styled.h1`
    flex: 0 0 auto;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-weight: 900;
    text-shadow: 2px 2px 8px #2b3e72;
    letter-spacing: -0.02em;
    margin: 0;
    margin-left: 10px;
    color: #95fcf2;
`;
const NavLinks = styled.ul`
    width: 60%;
    font-family: Trebuchet, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const Decal = styled.img`
position: absolute;  
z-index: -1;
border-radius: 0px 0px 10px 10px;
filter: saturate(160%);
flex: 1;
  height: 100%;
  width: 60%;

  object-fit: fill;
  pointer-events: none;
`;
const NavItem = styled.li`
    list-style: none;
    font-size: x-large;
    font-weight: bold;
    color: #6ea5ff;

    & > a {
    color: #6ea5ff;
    text-decoration: none;

    &:hover {
        color: #ffe89c;
    }}

    @media (max-width: 1366px) {
        font-size: medium;
      }
      
      @media (max-width: 1024px) {
        font-size: medium;
        
      }
      
      @media (max-width: 767px) {
        font-size: small;
      }
`;
