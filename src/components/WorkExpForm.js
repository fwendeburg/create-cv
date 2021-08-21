import React from 'react';

import Button from './Button';
import { FormTitle, InputContainer, TextInput, TextArea, InputLabel, ButtonContainer } from './FormComponents';

class WorkExpForm extends React.Component {
    render() {
        return (
            <>
                <FormTitle>Work Experience</FormTitle>
                <InputContainer>
                    <InputLabel htmlFor="position">Position*</InputLabel>
                    <TextInput type="text" id="position" required/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="company">Company*</InputLabel>
                    <TextInput type="text" id="company" required/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <TextInput type="text" id="city"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="from">From*</InputLabel>
                    <TextInput type="date" id="from" required/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="to">To (leave empty for ongoing)</InputLabel>
                    <TextInput type="date" id="to"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="description">Description or Achievements*</InputLabel>
                    <TextArea id="description" required/>
                </InputContainer>
                <ButtonContainer>
                    <Button text="add work experience" color="blue" colorHover="white" />
                </ButtonContainer>
            </>
        );
    }
}

export default WorkExpForm;