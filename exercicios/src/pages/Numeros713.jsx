// 7.13 - Faça um algoritmo que leia dois números e mostre todos os números 
// pares contidos entre eles. 
// Exemplo: 
//  - Limite inferior: 3 
//  - Limite superior: 12 
//  - Saída: 4 6 8 10

import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros713() {
    const [ numeroUm, setNumeroUm ] = useState("")
    const [ numeroDois, setNumeroDois ] = useState("")
    const [ mostrarResultado, setMostrarResultado ] = useState(false)

    function lerNumero(){

    }

  return (
    <div>
        <Navbar />
        <center>
            <h1>Exercício 7.13</h1>
            <p className='escrita'>Digite um número</p>
            <input type="text"
            value={numeroUm} 
            onChange={ (event) => setNumeroUm(event.target.value) }
            className="input"/>
            <br />
            <p className='escrita'>Digite um número</p>
            <input type="text" 
            value={numeroDois}
            onChange={ (event) => setNumeroDois(event.target.value) }
            className="input"/>
            <br /><br />
            <button onClick={lerNumero}>Ler</button>
        </center>
    </div>
  )
}

export default Numeros713
