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

        this.handleBackBtnClick = this.handleBackBtnClick.bind(this);
        this.handleNextBtnCLick = this.handleNextBtnCLick.bind(this);
        this.deleteEduForm = this.deleteEduForm.bind(this);
        this.deleteWorkForm = this.deleteWorkForm.bind(this);
        this.addWorkExpForm = this.addWorkExpForm.bind(this);
        this.addEduForm = this.addEduForm.bind(this);
        this.nextFormType = this.nextFormType.bind(this);
        this.previousFormType = this.previousFormType.bind(this);

        this.state = {
            formTypes: ['PersonalInfoForm', 'EducationForm', 'WorkExpForm'],
            currentFormType: 'PersonalInfoForm',
            personalForm: <PersonalInfoForm values={{}}/>,
            eduForms: [<EducationForm addEduForm={this.addEduForm} key="0" formId={uniqid()} deleteEduForm={this.deleteEduForm} values={{}}/>],
            workExpForms: [<WorkExpForm addWorkExpForm={this.addWorkExpForm} key="0" formId={uniqid()} deleteWorkForm={this.deleteWorkForm} values={{}}/>],
        };
    }

    getFormTypeIndex(formType) {
        for (let i = 0; i < this.state.formTypes.length; i++) {
            if (formType === this.state.formTypes[i]) {
                return i;
            }
        }
    }

    nextFormType() {
        let currentFormTypeIndex = this.getFormTypeIndex(this.state.currentFormType);
        
        this.setState({currentFormType: this.state.formTypes[currentFormTypeIndex + 1]});
    }

    previousFormType() {
        let currentFormTypeIndex = this.getFormTypeIndex(this.state.currentFormType);
        
        this.setState({currentFormType: this.state.formTypes[currentFormTypeIndex - 1]});
    }

    addEduForm() {
        this.setState({eduForms: [...this.state.eduForms, <EducationForm addEduForm={this.addEduForm} key={this.state.eduForms.length} formId={uniqid()} deleteEduForm={this.deleteEduForm} values={{}}/>]});
    }

    addWorkExpForm() {
        this.setState({workExpForms: [...this.state.workExpForms, <WorkExpForm addWorkExpForm={this.addWorkExpForm} key={this.state.workExpForms.length} formId={uniqid()} deleteWorkForm={this.deleteWorkForm} values={{}}/>]});
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

    getEduFormIndex(formId) {
        for (let i = 0; i < this.state.eduForms.length; i++) {
            if (this.state.eduForms[i].props.formId === formId) {
                return i;
            }
        }
    }

    getWorkExpFormIndex(formId) {
        for (let i = 0; i < this.state.workExpForms.length; i++) {
            if (this.state.workExpForms[i].props.formId === formId) {
                return i;
            }
        }
    }

    replaceEduForm(valuesObj) {
        let eduFormIndex = this.getEduFormIndex(valuesObj.formId);
        let ogEduForm = this.state.eduForms[eduFormIndex];

        let newFormProps = {
            ...ogEduForm.props,
            values: valuesObj
        }

        let newForm = {
            ...ogEduForm,
            props: newFormProps
        }
        
        this.setState(prevState => ({
            eduForms: prevState.eduForms.map(form => {
                if (form.props.formId === newForm.props.formId) {
                    form = newForm;
                }

                return form;
            })
        }))
    }

    replaceWorkExpForm(valuesObj) {
        let workExpFormIndex = this.getWorkExpFormIndex(valuesObj.formId);
        let ogWorkExpForm = this.state.workExpForms[workExpFormIndex];

        let newFormProps = {
            ...ogWorkExpForm.props,
            values: valuesObj
        }

        let newForm = {
            ...ogWorkExpForm,
            props: newFormProps
        }
        
        this.setState(prevState => ({
            workExpForms: prevState.workExpForms.map(form => {
                if (form.props.formId === newForm.props.formId) {
                    form = newForm;
                }

                return form;
            })
        }))
    }

    handleNextBtnCLick() {
        let valuesObj;

        if (this.state.currentFormType === 'PersonalInfoForm') {
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
        else if (this.state.currentFormType === 'EducationForm') {
            const forms = document.querySelector('#forms').childNodes;
            let valuesObj;
            
            for (let i = 1; i < forms.length; i++) {
                valuesObj = {
                    formId: forms[i].id,
                    degree: document.querySelector("#degree-" + forms[i].id).value,
                    university: document.querySelector("#university-" + forms[i].id).value,
                    gpa: document.querySelector("#gpa-" + forms[i].id).value,
                    from: document.querySelector("#from-" + forms[i].id).value,
                    to: document.querySelector("#to-" + forms[i].id).value,
                    description: document.querySelector("#description-" + forms[i].id).value
                };

                this.replaceEduForm(valuesObj);
            }
        }
        else if (this.state.currentFormType === 'WorkExpForm') {
            const forms = document.querySelector('#forms').childNodes;
            let valuesObj;
            
            for (let i = 1; i < forms.length; i++) {
                valuesObj = {
                    formId: forms[i].id,
                    position: document.querySelector("#position-" + forms[i].id).value,
                    company: document.querySelector("#company-" + forms[i].id).value,
                    city: document.querySelector("#city-" + forms[i].id).value,
                    from: document.querySelector("#from-" + forms[i].id).value,
                    to: document.querySelector("#to-" + forms[i].id).value,
                    description: document.querySelector("#description-" + forms[i].id).value
                };

                this.replaceWorkExpForm(valuesObj);
            }
        }

        this.nextFormType();
    }

    handleBackBtnClick() {
        if (this.state.currentFormType === 'EducationForm') {
            const forms = document.querySelector('#forms').childNodes;
            let valuesObj;
            
            for (let i = 1; i < forms.length; i++) {
                valuesObj = {
                    formId: forms[i].id,
                    degree: document.querySelector("#degree-" + forms[i].id).value,
                    university: document.querySelector("#university-" + forms[i].id).value,
                    gpa: document.querySelector("#gpa-" + forms[i].id).value,
                    from: document.querySelector("#from-" + forms[i].id).value,
                    to: document.querySelector("#to-" + forms[i].id).value,
                    description: document.querySelector("#description-" + forms[i].id).value
                };

                this.replaceEduForm(valuesObj);
            }
        }
        else if (this.state.currentFormType === 'WorkExpForm') {
            const forms = document.querySelector('#forms').childNodes;
            let valuesObj;
            
            for (let i = 1; i < forms.length; i++) {
                valuesObj = {
                    formId: forms[i].id,
                    position: document.querySelector("#position-" + forms[i].id).value,
                    company: document.querySelector("#company-" + forms[i].id).value,
                    city: document.querySelector("#city-" + forms[i].id).value,
                    from: document.querySelector("#from-" + forms[i].id).value,
                    to: document.querySelector("#to-" + forms[i].id).value,
                    description: document.querySelector("#description-" + forms[i].id).value
                };

                this.replaceWorkExpForm(valuesObj);
            }
        }

        this.previousFormType();
    }

    render() {
        return (
            <MainContainer>
                <ContentContainer id="forms">
                    {this.state.currentFormType === 'PersonalInfoForm'? this.showPersonalInfoForm() : null}
                    {this.state.currentFormType === 'EducationForm'? this.showEduForms() : null}
                    {this.state.currentFormType === 'WorkExpForm'? this.showWorkExpForms() : null}
                </ContentContainer>

                <ContentContainer>
                    {this.state.currentFormType === 'WorkExpForm'? <Button color="#21BA45" text="generate pdf" hoverColor="#1FA83F"/> : null}
                    {this.state.currentFormType === 'WorkExpForm'? null : <Button onButtonClicked={this.handleNextBtnCLick} color="#21BA45" text="next" hoverColor="#1FA83F"/>}
                    {this.state.currentFormType === 'PersonalInfoForm'? null : <Button onButtonClicked={this.handleBackBtnClick} color="#D54545" text="back" hoverColor="#B63B3B"/>}
                </ContentContainer>
            </MainContainer>
        );
    }
}

export default Main;