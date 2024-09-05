// Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo tempo.

import './Media.css'
import { useState } from "react"

function Ex2() {

    const [resultado, setResultado] = useState()

    function aperte(){

        let numero = Number(prompt("Digite um número: "))

        if(numero % 2 == 0 && numero > 0){
            setResultado("O número é par e positivo")
        }else{
            setResultado("O número não é par e positivo")
        }

    }

  return (
    <div className='Media-Container'>
      <button onClick={aperte}>Aperte</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Ex2
