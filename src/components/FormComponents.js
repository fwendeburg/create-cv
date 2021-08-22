import styled from 'styled-components';

const FormTitle = styled.h2`
    color: rgb(0, 0, 0);
    font-size: 24px;
`

const InputContainer = styled.div`
    margin-right: 20px;
    margin-left: 20px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const TextInput = styled.input`
    width: 100%;
`

const TextArea = styled.textarea`
    width: 100%;
    resize: vertical;
    min-height: 100px;
`
const InputLabel = styled.label`
    margin-bottom: 5px;
`

const ButtonContainer = styled.div`
    margin-top: 10px;
    width: 100%;
`

const FormContainer = styled.div`
    width: 100%;
`

export { FormTitle, InputContainer, TextInput, TextArea, InputLabel, ButtonContainer, FormContainer };