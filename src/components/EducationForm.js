import React from 'react';

import Button from './Button';
import { FormTitle, InputContainer, TextInput, TextArea, InputLabel, ButtonContainer } from './FormComponents';

class EducationForm extends React.Component {
    render() {
        return (
            <>
                <FormTitle>Education</FormTitle>
                <InputContainer>
                    <InputLabel htmlFor="degree">Degree or Stream</InputLabel>
                    <TextInput type="text" id="degree"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="university">University or School</InputLabel>
                    <TextInput type="text" id="university"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="gpa">GPA</InputLabel>
                    <TextInput type="number" step="0.01" min="0.00" max="10.0" id="gpa"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="from">From</InputLabel>
                    <TextInput type="date" id="from"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="to">To (leave empty for ongoing)</InputLabel>
                    <TextInput type="date" id="to"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="description">Description or Achievements</InputLabel>
                    <TextArea id="description"/>
                </InputContainer>
                <ButtonContainer>
                    <Button text="add education" color="blue" colorHover="white" />
                </ButtonContainer>
            </>
        );
    }
}

export default EducationForm;