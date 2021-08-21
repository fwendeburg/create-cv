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

        this.nextForm = this.nextForm.bind(this);
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
                    {this.state.currentForm === 'WorkExpForm'? null : <Button onButtonClicked={this.nextForm} color="#21BA45" text="next" hoverColor="#1FA83F"/>}
                    {this.state.currentForm === 'PersonalInfoForm'? null : <Button onButtonClicked={this.previousForm} color="#D54545" text="back" hoverColor="#B63B3B"/>}
                </ContentContainer>
            </MainContainer>
        );
    }
}

export default Main;