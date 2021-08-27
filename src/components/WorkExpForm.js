import React from 'react';

import Button from './Button';
import { InputContainer, TextInput, TextArea, InputLabel, ButtonContainer, FormContainer } from './FormComponents';

class WorkExpForm extends React.Component {
    render() {
        return (
            <FormContainer id={this.props.formId} >
                <InputContainer>
                    <InputLabel htmlFor="position">Position</InputLabel>
                    <TextInput type="text" id={"position-" + this.props.formId} defaultValue={this.props.values.position}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="company">Company</InputLabel>
                    <TextInput type="text" id={"company-" + this.props.formId} defaultValue={this.props.values.company}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="from">From</InputLabel>
                    <TextInput id={"from-" + this.props.formId} defaultValue={this.props.values.from}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="to">To</InputLabel>
                    <TextInput id={"to-" + this.props.formId} defaultValue={this.props.values.to}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="description">Description or Achievements</InputLabel>
                    <TextArea id={"description-" + this.props.formId} defaultValue={this.props.values.description}/>
                </InputContainer>
                <ButtonContainer>
                    <Button text="delete work experience" color="#333333" colorHover="#242424" onButtonClicked={this.props.deleteWorkForm} />
                </ButtonContainer>
            </FormContainer>
        );
    }
}

export default WorkExpForm;