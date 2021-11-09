import React from "react"
import './Cartao.css'
import Botao from "../components/Botao"
import Cadastro from "../components/Cadastro"

const Cartao = props => {

    let cor = props.assentos <= 0 ? `red` : `green` 

    let assentos = props.assentos

    let estilo = {
        backgroundColor: cor || 'blue',
        borderColor: cor || 'black',
    }    

    let botao = props.assentos <= 0 ? <Botao label="INDISPONIVEL"/> : <Botao label="RESERVAR ASSENTO"/>    
    
    let cadastro = props.assentos <= 0 ? "Inválido" : <Cadastro/>

    return (
        <div className="Cartao" style={estilo}>
            <div className="Titulo">{props.titulo} - Voo nº {props.voo}</div>     
            <div className="Conteudo">
                <h2> Origem: {props.origem}</h2>
                <h2> Destino: {props.destino}</h2>
                <h2> Horário: {props.saida} - {props.chegada}</h2>
                <h2> {props.assentos == 0 ? "Sem assentos" : `${assentos} Assentos disponíveis`}</h2>
                <h2> {cadastro} </h2>
                <h2> {botao} </h2>
            </div>
        </div>
          
    )
}
export default Cartao
