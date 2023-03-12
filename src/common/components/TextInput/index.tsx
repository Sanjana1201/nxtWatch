import React, { Component } from 'react';
import { CustomInputBox, TextInputContainer, TextLabel } from './styledComponents';

interface Props {
    label: string;
    placeholder: string;
    type: string;
    onChange: (e: any) => void;
}

class TextInput extends Component<Props> {


    onChange = (e: any) => {
        const {onChange } = this.props;
        onChange(e.target.value);
    }

    render() {
        const {  label, placeholder,type } = this.props;
        return (
            <TextInputContainer>
                <TextLabel htmlFor="input-el">{label}</TextLabel>
                <CustomInputBox name="input-el" type={type} placeholder={placeholder} onChange={this.onChange}/>
            </TextInputContainer>
        );
    }
}

export default TextInput;