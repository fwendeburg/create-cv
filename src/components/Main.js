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

        this.handleNextBtnCLick = this.handleNextBtnCLick.bind(this);
        this.deleteEduForm = this.deleteEduForm.bind(this);
        this.deleteWorkForm = this.deleteWorkForm.bind(this);
        this.addWorkExpForm = this.addWorkExpForm.bind(this);
        this.addEduForm = this.addEduForm.bind(this);
        this.nextForm = this.nextForm.bind(this);
        this.previousForm = this.previousForm.bind(this);

        this.state = {
            form: ['PersonalInfoForm', 'EducationForm', 'WorkExpForm'],
            currentForm: 'PersonalInfoForm',
            personalForm: <PersonalInfoForm values={{}}/>,
            eduForms: [<EducationForm addEduForm={this.addEduForm} key="0" formId={uniqid()} deleteEduForm={this.deleteEduForm} values={{}}/>],
            workExpForms: [<WorkExpForm addWorkExpForm={this.addWorkExpForm} key="0" formId={uniqid()} deleteWorkForm={this.deleteWorkForm}/>],
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

    addEduForm() {
        this.setState({eduForms: [...this.state.eduForms, <EducationForm addEduForm={this.addEduForm} key={this.state.eduForms.length} formId={uniqid()} deleteEduForm={this.deleteEduForm} values={{}}/>]});
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

    showPersonalInfoForm() {
        return (
            <>
                <FormTitle>Personal Information</FormTitle>
                {this.state.personalForm}
            </>
        );
    }

    handleNextBtnCLick() {
        let valuesObj;

        if (this.state.currentForm === 'PersonalInfoForm') {
            valuesObj = {
                name: document.querySelector("#first-name").value,
                lname: document.querySelector("#last-name").value,
                curRole: document.querySelector("#role").value,
                email: document.querySelector("#email").value,
                pnumber: document.querySelector("#phone-number").value,
                adress: document.querySelector("#adress").value,
            }

            this.setState({personalForm: <PersonalInfoForm values={valuesObj}/>});
        }
        else if (this.state.currentForm === 'EducationForm') {
            const forms = document.querySelector('#forms').childNodes;
            let valuesObj;
            
            for (let i = 1; i < forms.length; i++) {
                valuesObj = {
                    id: forms[i].id,
                    degree: document.querySelector("#degree-" + forms[i].id).value,
                    university: document.querySelector("#university-" + forms[i].id).value,
                    gpa: document.querySelector("#gpa-" + forms[i].id).value,
                    from: document.querySelector("#from-" + forms[i].id).value,
                    to: document.querySelector("#to-" + forms[i].id).value,
                    desciption: document.querySelector("#description-" + forms[i].id).value
                };


            }
        }

        this.nextForm();
    }

    render() {
        return (
            <MainContainer>
                <ContentContainer id="forms">
                    {this.state.currentForm === 'PersonalInfoForm'? this.showPersonalInfoForm() : null}
                    {this.state.currentForm === 'EducationForm'? this.showEduForms() : null}
                    {this.state.currentForm === 'WorkExpForm'? this.showWorkExpForms() : null}
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