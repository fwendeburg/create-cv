import React from 'react';

import { FormTitle, InputContainer, TextInput, InputLabel } from './FormComponents';

class PersonalInfoForm extends React.Component {
    render() {
        return(
            <>
                <FormTitle>Personal Information</FormTitle>
                <InputContainer>
                    <InputLabel htmlFor="first-name">First Name</InputLabel>
                    <TextInput type="text" id="first-name"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="last-name">Last Name</InputLabel>
                    <TextInput type="text" id="last-name"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="role">Current Role</InputLabel>
                    <TextInput type="text" id="role"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <TextInput type="email" id="email"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
                    <TextInput type="text" id="phone-number"/>
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="adress">Adress</InputLabel>
                    <TextInput type="text" id="adress"/>
                </InputContainer>
            </>
        );
    }
}

export default PersonalInfoForm;