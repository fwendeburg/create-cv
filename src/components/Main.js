import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

import Button from './Button';
import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import WorkExpForm from './WorkExpForm';
import { FormTitle } from './FormComponents';


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

        this.deleteEduForm = this.deleteEduForm.bind(this);
        this.deleteWorkForm = this.deleteWorkForm.bind(this);
        this.addWorkExpForm = this.addWorkExpForm.bind(this);
        this.addEduForm = this.addEduForm.bind(this);
        this.nextForm = this.nextForm.bind(this);
        this.previousForm = this.previousForm.bind(this);

        this.state = {
            forms: ['PersonalInfoForm', 'EducationForm', 'WorkExpForm'],
            currentForm: 'PersonalInfoForm',
            eduForms: [<EducationForm addEduForm={this.addEduForm} key="0" formId={uniqid()} deleteEduForm={this.deleteEduForm}/>],
            workExpForms: [<WorkExpForm addWorkExpForm={this.addWorkExpForm} key="0" formId={uniqid()} deleteWorkForm={this.deleteWorkForm}/>]
        };
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

    // Form validation fns, not used anymore.
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
    // End form valdiation fns.

    addEduForm() {
        this.setState({eduForms: [...this.state.eduForms, <EducationForm addEduForm={this.addEduForm} key={this.state.eduForms.length} formId={uniqid()} deleteEduForm={this.deleteEduForm}/>]});
    }

    addWorkExpForm() {
        this.setState({workExpForms: [...this.state.workExpForms, <WorkExpForm addWorkExpForm={this.addWorkExpForm} key={this.state.workExpForms.length} formId={uniqid()} deleteWorkForm={this.deleteWorkForm}/>]});
    }

    deleteWorkForm(e) {
        let formId = e.target.parentNode.parentNode.id;

        this.setState((prevState) => ({
            workExpForms: prevState.workExpForms.filter(f => f.props.formId !== formId)
        })); 
    }

    deleteEduForm(e) {
        let formId = e.target.parentNode.parentNode.id;

        this.setState((prevState) => ({
            eduForms: prevState.eduForms.filter(f => f.props.formId !== formId)
        })); 
    }

    showEduForms() {
        return (
            <>
                <FormTitle>Education</FormTitle>
                {this.state.eduForms}
            </>
        );
    }

    showWorkExpForms() {
        return (
            <>
                <FormTitle>Work Experience</FormTitle>
                {this.state.workExpForms}
            </>
        );
    }

    render() {
        return (
            <MainContainer>
                <ContentContainer>
                    {this.state.currentForm === 'PersonalInfoForm'? <PersonalInfoForm /> : null}
                    {this.state.currentForm === 'EducationForm'? this.showEduForms() : null}
                    {this.state.currentForm === 'WorkExpForm'? this.showWorkExpForms() : null}
                </ContentContainer>

                <ContentContainer>
                    {this.state.currentForm === 'WorkExpForm'? <Button color="#21BA45" text="generate pdf" hoverColor="#1FA83F"/> : null}
                    {this.state.currentForm === 'WorkExpForm'? null : <Button onButtonClicked={this.nextForm} color="#21BA45" text="next" hoverColor="#1FA83F"/>}
                    {this.state.currentForm === 'PersonalInfoForm'? null : <Button onButtonClicked={this.previousForm} color="#D54545" text="back" hoverColor="#B63B3B"/>}
                </ContentContainer>
            </MainContainer>
        );
    }
}

export default Main;