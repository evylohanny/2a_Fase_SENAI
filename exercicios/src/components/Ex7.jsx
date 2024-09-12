// O porco: Faça um programa que leia o valor de um produto X e leia 
// a quantidade de moedas de um cofrinho que contenha: 
//  N moedas de 1 real; 
//  N moedas de 50 centavos; 
//  N moedas de 25 centavos; 
//  N moedas de 10 centavos; 
//  N moedas de 5 centavos; 
// O programa deverá verificar se o total de reais que contem no cofrinho é 
// o bastante para compra o produto X. 
// {/* <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a  */}
// quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
// porco; ver se cabe no “orçamento”>

import { useState } from "react"
import './Media.css'

function Ex7() {

    const [resultado,setResultado] = useState()

    function ler(){
        let valorProduto = Number(prompt("Digite o valor do produto: "))
    }

  return (
    <div className="Media-Container">
      <button onClick={ler}>Cofrinho</button>

    </div>
  )
}

export default Ex7
