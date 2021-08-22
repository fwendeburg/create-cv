import React from 'react';

import Button from './Button';
import { InputContainer, TextInput, TextArea, InputLabel, ButtonContainer, FormContainer } from './FormComponents';

class EducationForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {btnMode: 'normal'};
    }

    handleBtnClick(e) {
        // Add button to remove form.
        this.setState({btnMode: 'delete'});

        this.props.addEduForm();
    }

    render() {
        return (
            <FormContainer id={this.props.formId}>
                <InputContainer>
                    <InputLabel htmlFor="degree">Degree or Stream</InputLabel>
                    <TextInput type="text" id={"degree-" + this.props.formId} defaultValue={this.props.values.degree}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="university">University or School</InputLabel>
                    <TextInput type="text" id={"university-" + this.props.formId} defaultValue={this.props.values.university}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="gpa">GPA</InputLabel>
                    <TextInput type="number" step="0.01" min="0.00" max="10.0" id={"gpa-" + this.props.formId} defaultValue={this.props.values.gpa}/>
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
                    {this.state.btnMode === 'normal'? <Button text="add education" color="#333333" colorHover="#242424" onButtonClicked={this.handleBtnClick}/> : <Button text="delete education" color="#333333" colorHover="#242424" onButtonClicked={this.props.deleteEduForm} />}
                </ButtonContainer>
            </FormContainer>
        );
    }
}

export default EducationForm;