import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100vw;
    height: 10vh;
    background-color: #fcfdff;
    box-shadow: 0px 1px 5px 0px rgba(163,163,163,0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const MenuItem = styled(NavLink)`
    text-decoration: none;
    color: #2e2e2e;
    &:hover {
        font-weight: bold;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <MenuItem to="/Home" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</MenuItem> <MenuItem to="/Post" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Post</MenuItem>
        </Nav>
    )
}

export default Navbar;