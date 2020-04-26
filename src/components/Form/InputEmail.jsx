import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

const InputEmail = ({...props}) => (
    <FormGroup>
        {props.label && <Label>{props.label}</Label>}
        <Input
            type="email"
            {...props}
            /**
             * onChange ==> Cambio de valor
             * value ==> Nuestro Valor
             * className ==> Clases de Estilo
             * style ==> Nuestros Style
             */
        />
    </FormGroup>
);

export default InputEmail;
