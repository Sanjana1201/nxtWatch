import React, { Component } from 'react';
import { ButtonEl } from './styledComponents';
import 'styled-components/macro'

interface Props {
    onClickButton: () => void
    buttonText: string
}

class Button extends Component<Props> {
    render() {
        const { onClickButton, buttonText } = this.props

        return (
            <ButtonEl onClick={onClickButton}>
                {buttonText}
            </ButtonEl>
        );
    }
}

export default Button;