import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    height: 40px;
    width: calc(100% - 40px);
    background-color: ${(props) => props.color};
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    border: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 700;

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
`

class Button extends React.Component {
    render() {
        return (
            <ButtonStyles onClick={this.props.onButtonClicked} color={this.props.color} hoverColor={this.props.hoverColor}>
                {this.props.text}
            </ButtonStyles>
        );
    }
}

export default Button;