import React from "react";
import './Cadastro.css'

const Cadastro = _ => {
    return (
        <div>
            <div>
                <label for="Nome">Nome: </label>
                <input type="name" class="form-control" id="name1" aria-describedby="nameHelp" placeholder="Digite seu nome!"/>
            </div>
            <div>
                <label for="Email">E-mail: </label>
                <input type="email" class="form-control" id="name1" aria-describedby="emailHelp" placeholder="Digite seu e-mail"/>
            </div>
        </div>
    )
}

export default Cadastro