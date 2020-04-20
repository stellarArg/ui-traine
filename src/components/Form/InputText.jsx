import React from 'react';

const InputText = ({...props}) => (
    <label>
        {props.label && <div>{props.label}</div>}
        <input
            type="text"
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

export default InputText;
