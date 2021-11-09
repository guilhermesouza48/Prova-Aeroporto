import React from "react";
import './Botao.css'

const Botao = props => {
    
    return (
            <button
                onClick = {e => props.click && props.click(props.label)} 
                className={`botao`}>
                {props.label}
            </button>
    )
}

export default Botao

