import React from 'react';
import '../App.css';

const LabelCronometro = (props) => ( //envia o name via props
    <h1 className="my-title">{props.name}</h1> // cria elemento css e envia o name para o app.js
)
export default LabelCronometro 