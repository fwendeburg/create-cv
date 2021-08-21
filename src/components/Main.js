import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import WorkExpForm from './WorkExpForm';


const MainContainer = styled.div`
    margin-top: 95px;
    margin-bottom: 25px;
    background-color: rgb(238, 238, 238);
    height: max-content;
    width: 40vw;
    min-width: 300px;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 15px;
`

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            forms: ['PersonalInfoForm', 'EducationForm', 'WorkExpForm'],
            currentForm: 'PersonalInfoForm'
        };

        this.handleNextBtnCLick = this.handleNextBtnCLick.bind(this);
        this.previousForm = this.previousForm.bind(this);
    }

    getFormIndex(form) {
        for (let i = 0; i < this.state.forms.length; i++) {
            if (form === this.state.forms[i]) {
                return i;
            }
        }
    }

    nextForm() {
        let currentFormIndex = this.getFormIndex(this.state.currentForm);
        
        this.setState({currentForm: this.state.forms[currentFormIndex + 1]});
    }

    previousForm() {
        let currentFormIndex = this.getFormIndex(this.state.currentForm);
        
        this.setState({currentForm: this.state.forms[currentFormIndex - 1]});
    }

    verifyInputValidity() {
        let inputsValid = true;

        const inputs = document.querySelectorAll('input');
        let requiredInputs = [];
        let invalidInputs = [];
        let validInputs = [];

        inputs.forEach(input => {
            if (input.hasAttribute('required')) {
                requiredInputs.push(input);
            }
        });

        requiredInputs.forEach(input => {
            const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let today = new Date();

            if (input.type !== 'text') {
                if ((input.type === 'number' || input.type === 'tel') && /[A-Za-z]/.test(input.value)) {
                    inputsValid = false;

                    invalidInputs.push(input);
                }
                else if (input.type === 'email' && !emailRegEx.test(input.value)) {
                    inputsValid = false;

                    invalidInputs.push(input);
                }
                else if (input.type === 'date' && false) {
                    // ToDo.
                }
                else {
                    validInputs.push(input);
                }
            }
            if (input.value === '') {
                inputsValid = false;

                invalidInputs.push(input);
            }
            else {
                validInputs.push(input);
            }
        });

        validInputs.forEach(input => {
            let label = input.parentNode.childNodes[0];

            label.style.color = null;
        })

        return {inputsValid, invalidInputs};
    }

    showInvalidInputs(inputs) {
        inputs.forEach(input => {
            let label = input.parentNode.childNodes[0];

            label.style.color = 'red';
        });
    }

    handleNextBtnCLick() {
        let areInputsValid = this.verifyInputValidity();

        if (areInputsValid.inputsValid) {
            this.nextForm();
        }
        else {
            this.showInvalidInputs(areInputsValid.invalidInputs);
        }
    }

    render() {
        return (
            <MainContainer>
                <ContentContainer>
                    {this.state.currentForm === 'PersonalInfoForm'? <PersonalInfoForm /> : null}
                    {this.state.currentForm === 'EducationForm'? <EducationForm /> : null}
                    {this.state.currentForm === 'WorkExpForm'? <WorkExpForm /> : null}
                </ContentContainer>

                <ContentContainer>
                    {this.state.currentForm === 'WorkExpForm'? <Button color="#21BA45" text="generate pdf" hoverColor="#1FA83F"/> : null}
                    {this.state.currentForm === 'WorkExpForm'? null : <Button onButtonClicked={this.handleNextBtnCLick} color="#21BA45" text="next" hoverColor="#1FA83F"/>}
                    {this.state.currentForm === 'PersonalInfoForm'? null : <Button onButtonClicked={this.previousForm} color="#D54545" text="back" hoverColor="#B63B3B"/>}
                </ContentContainer>
            </MainContainer>
        );
    }
}

export default Main;