import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(51, 51, 51);
`

const NavbarTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: rgb(255, 255, 255);
`

class Navbar extends React.Component {
    render() {
        return (
            <NavbarContainer>
                <NavbarTitle>CV Builder</NavbarTitle>
            </NavbarContainer>
        );
    }
}

export default Navbar;