// Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import { useState } from "react"
import './Media.css'

function Ex3() {

    const [resultado, setResultado] = useState()

    function clique(){
      let salario = Number(prompt("Digite seu salário: "))
      let emprestimo = Number(prompt("Digite o valor do empréstimo: "))
      let prestacoes = Number(prompt("Digite o número de prestações: "))
      let calculoemprestimo = emprestimo / prestacoes
      let porcentagem = calculoemprestimo * 100 / salario

      if(salario <= 0 || emprestimo <= 0 || prestacoes <= 0){
        setResultado("Campos digitados inválidos ou não preenchidos")

      }else if(porcentagem <= 30){
        setResultado("Empréstimo Concedido!")

      }else if(porcentagem > 30){
        setResultado("Empréstimo Recusado!")

      }
    }

  return (
    <div className="Media-Container">
      <button onClick={clique}>Clique aqui</button>
      <br />
      {resultado}
    </div>
  )
}

export default Ex3
