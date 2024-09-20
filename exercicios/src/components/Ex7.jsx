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
    const [dinheiroCofrinho, setDinheiroCofrinho] = useState()
    const [valorProduto, setValorProduto] = useState()

    function ler(){
        let quant1Real = Number(prompt("Digite quantas moedas de 1 real tem no cofrinho:"))
        let quant50Cen = Number(prompt("Digite quantas moedas de 50 centavos tem no cofrinho:"))
        let quant25Cen = Number(prompt("Digite quantas moedas de 25 centavos tem no cofrinho:"))
        let quant10Cen = Number(prompt("Digite quantas moedas de 10 centavos tem no cofrinho:"))
        let quant5Cen = Number(prompt("Digite quantas moedas de 5 centavos tem no cofrinho:"))

        let total1Real = quant1Real * 1
        let total50Cen = quant50Cen * 0.50
        let total25cen = quant25Cen * 0.25
        let total10cen = quant10Cen * 0.10
        let total5Cen = quant5Cen * 0.05

        let valorTotalcofrinho = total1Real + total50Cen + total25cen + total10cen + total5Cen
        setDinheiroCofrinho(valorTotalcofrinho)

        if(valorTotalcofrinho >= valorProduto){
          setResultado("Você tem dinheiro o bastante no cofrinho para comprar o produto")
        }else{
          setResultado("Você não tem dinheiro o bastante no cofrinho para comprar o produto")
        }
    }

  return (
    <div className="Media-Container">
      <div>
        Digite o valor do Produto:
      </div>
      <div>
        <input type="text" 
        value={valorProduto}
        onChange={ (event) => {setValorProduto(event.target.value)}}
        />
      </div>
      <br />
      <div>
        <button onClick={ler}>Cofrinho</button>
      </div>
      <div>
        Valor total no cofrinho: {dinheiroCofrinho}
      </div>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Ex7
