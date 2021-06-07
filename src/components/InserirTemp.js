import React from 'react';



const InserirTemp = (props) => {
    return (
        
        <input onChange={props.onChange}
        value={props.value}
        type="number" 
        className="inputTemp" 
        min="0"
        >{props.Nome}</input> // cria elemento css e envia o name para o app.js

    )
}

export default InserirTemp