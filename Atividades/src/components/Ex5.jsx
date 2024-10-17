// Um comerciante comprou um produto e quer vendê-lo com lucro de 
// 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
// será de 30%. Faça um programa que entre com o valor do produto e mostre 
// o valor de venda.

import { useState } from "react"
import './Media.css'

function Ex5() {

    const [resultado, setResultado] = useState()

    function enviar(){
        let valor = Number(prompt("Digite o valor do produto: "))

        if(valor < 20){
            let desconto = (45 / 100) * valor
            let valorTotal = valor + desconto
            setResultado(valorTotal)
        }else{
            let desconto = (30 / 100) * valor
            let valorTotal = valor + desconto
            setResultado(valorTotal)
        }
    }

  return (
    <div className="Media-Container">
      <button onClick={enviar}>Enviar</button>
      <br />
      Valor da venda: {resultado}
    </div>
  )
}

export default Ex5
