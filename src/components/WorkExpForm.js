import React from 'react';

import Button from './Button';
import { InputContainer, TextInput, TextArea, InputLabel, ButtonContainer, FormContainer } from './FormComponents';

class WorkExpForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {btnMode: 'normal'};
    }

    handleBtnClick(e) {
        // Add button to remove form.
        this.setState({btnMode: 'delete'});

        this.props.addWorkExpForm();
    }

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
                    <InputLabel htmlFor="city">City</InputLabel>
                    <TextInput type="text" id={"city-" + this.props.formId} defaultValue={this.props.values.city}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="from">From</InputLabel>
                    <TextInput type="date" id={"from-" + this.props.formId} defaultValue={this.props.values.from}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="to">To (leave empty for ongoing)</InputLabel>
                    <TextInput type="date" id={"to-" + this.props.formId} defaultValue={this.props.values.to}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="description">Description or Achievements</InputLabel>
                    <TextArea id={"description-" + this.props.formId} defaultValue={this.props.values.description}/>
                </InputContainer>
                <ButtonContainer>
                    {this.state.btnMode === 'normal'? <Button text="add work experience" color="#333333" colorHover="#242424" onButtonClicked={this.handleBtnClick} /> : <Button text="delete work experience" color="#333333" colorHover="#242424" onButtonClicked={this.props.deleteWorkForm} />}
                </ButtonContainer>
            </FormContainer>
        );
    }
}

export default WorkExpForm;