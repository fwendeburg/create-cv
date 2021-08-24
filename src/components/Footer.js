import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: rgb(51, 51, 51);
    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterText = styled.p`
    font-size: 18px;
    color: white;
`

const FooterLink = styled.a`
    &:visited {
        color: white;
    }
`

class Footer extends React.Component {
    render() {
        return (
            <FooterContainer id="footer">
                <FooterText>Made by <FooterLink href="https://github.com/fwendeburg">Francisco Wendeburg</FooterLink></FooterText>
            </FooterContainer>
        );
    }
}

export default Footer;