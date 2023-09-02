import styled from 'styled-components'


export default function Navigation ({navItems, children}) {
    const links = composeNavLinks(navItems);
    return(
        <NavBar>
            <SiteName onClick={()=>{window.location.reload()}}>{children}</SiteName>
            <NavLinks>
                <span style={{visibility: 'hidden'}}>{links}</span>
            </NavLinks>
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
    border-bottom: 1px solid #95fcf2;
    margin: 0;
    padding: 0;
    width: 80%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const SiteName = styled.h1`
    font-family: Palatino, sans-serif;
    color: #95fcf2;
`;
const NavLinks = styled.ul`
    width: 60%;
    font-family: Trebuchet, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
