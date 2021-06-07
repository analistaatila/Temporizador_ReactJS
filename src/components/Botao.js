import React from 'react'

const Botao = (props) => (
    <button className="bot"
    onClick={props.onClick}
    >{props.label}</button> // ou clique do botão
)
export default Botao