import React from "react"
import Cartao from './layout/Cartao'
import './App.css'
import A from './img/A.gif'


const App = () => {
    return <div className="App">
                <div><img id="aviao" alt="Gif de um avião em desenho" src={A}/><h1>FAST-FLIGHT</h1></div>
                <div className="Cartoes">
                    <Cartao
                        titulo = "🌊 BRASIL 🌊"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São paulo"
                        destino = "Rio de janeiro"
                        saida = "03:00"
                        chegada = "08:40"
                        assentos = {parseInt(Math.random() * (35-0)+0)}
                    />
                    <Cartao
                        titulo = "🏂 CANADA 🏂"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São Paulo"
                        destino = "Vancouver"
                        saida = "16:00"
                        chegada = "01:00"
                        assentos = {parseInt(Math.random() * (50-0)+0)}
                    />
                    <Cartao
                        titulo = "🐂 ARGENTINA 🐂"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "Rio de janeiro"
                        destino = "Boenos Aires"
                        saida = "02:00"
                        chegada = "03:50"
                        assentos = {parseInt(Math.random() * (55-0)+0)}
                    />
                    <Cartao
                        titulo = "🐉 CHINA 🐉"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São paulo"
                        destino = "Hong Kong"
                        saida = "02:30"
                        chegada = "09:30"
                        assentos = {parseInt(Math.random() * (12-0)+0)}
                    />
                    <Cartao
                        titulo = "⛱️ ESTADOS UNIDOS ⛱️"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São paulo"
                        destino = "Miami"
                        saida = "12:00"
                        chegada = "17:00"
                        assentos = {parseInt(Math.random() * (9-0)+0)}
                    />
                    <Cartao
                        titulo = "☀️ EGITO ☀️"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São paulo"
                        destino = "Cairo"
                        saida = "03:00"
                        chegada = "10:00"
                        assentos = {parseInt(Math.random() * (10-0)+0)}
                    />
                    <Cartao
                        titulo = "🗿 CHILE 🗿"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "Rio de Janeiro"
                        destino = "Ilha de Páscoa"
                        saida = "01:00"
                        chegada = "04:55"
                        assentos = {parseInt(Math.random() * (90-0)+0)}
                    />
                    <Cartao
                        titulo = "🏝️ CARIBE 🏝️"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São paulo"
                        destino = "Bahamas"
                        saida = "06:00"
                        chegada = "09:00"
                        assentos = {parseInt(Math.random() * (40-0)+0)}
                    />
                    <Cartao
                        titulo = "🗼 JAPÃO 🗼"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "Rio de Janeiro"
                        destino = "Tokyo"
                        saida = "14:00"
                        chegada = "19:00"
                        assentos = {parseInt(Math.random() * (30-0)+0)}
                    />
                    <Cartao
                        titulo = "🗽 ESTADOS UNIDOS 🗽"
                        voo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "São paulo"
                        destino = "Nova Iorque"
                        saida = "07:00"
                        chegada = "12:45"
                        assentos = {parseInt(Math.random() * (40-0)+0)}
                    />
                </div>
            </div>
}

export default App