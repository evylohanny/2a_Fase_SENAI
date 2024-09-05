// Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo.

import './Media.css'
import { useState } from "react"

function Ex1() {

    const [resultado, setResultado] = useState()

    function analisar(){

    let numero = Number(prompt("Digite um número: "))

    if(numero >= 1){
        setResultado("O número é positivo")
    }else if(numero < 0){
        setResultado("O número é negativo")
    }else if(numero == 0){
        setResultado("O número é nulo")
    }

    }

  return (
    <div className='Media-Container'>
        <button onClick={analisar}>Analisar Número</button>
        <div>
            {resultado}
        </div>
    </div>
  )
}

export default Ex1
