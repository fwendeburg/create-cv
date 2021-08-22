import React from 'react';

import { InputContainer, TextInput, InputLabel, FormContainer } from './FormComponents';

class PersonalInfoForm extends React.Component {
    render() {
        return(
            <FormContainer>
                <InputContainer>
                    <InputLabel htmlFor="first-name">First Name</InputLabel>
                    <TextInput type="text" id="first-name" defaultValue={this.props.values.name}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="last-name">Last Name</InputLabel>
                    <TextInput type="text" id="last-name" defaultValue={this.props.values.lname}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="role">Current Role</InputLabel>
                    <TextInput type="text" id="role" defaultValue={this.props.values.curRole}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <TextInput type="email" id="email" defaultValue={this.props.values.email}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
                    <TextInput type="tel" id="phone-number" defaultValue={this.props.values.pnumber}/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="adress">Adress</InputLabel>
                    <TextInput type="text" id="adress" defaultValue={this.props.values.adress}/>
                </InputContainer>
            </FormContainer>
        );
    }
}

export default PersonalInfoForm;