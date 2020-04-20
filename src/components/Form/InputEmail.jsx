import React from 'react';

const InputEmail = ({...props}) => (
    <label>
        {props.label && <div>{props.label}</div>}
        <input
            type="email"
            {...props}
            /**
             * onChange ==> Cambio de valor
             * value ==> Nuestro Valor
             * className ==> Clases de Estilo
             * style ==> Nuestros Style
             */
        />
    </label>
);

export default InputEmail;
