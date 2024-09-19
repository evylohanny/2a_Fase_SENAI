// 5.7// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
// tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
// destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
// acabar...
// Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
// única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
// e fez check in, mas não conseguiu entender de forma alguma como o hotel 
// calculava o valor da conta. Ele é meio burro, vocês sabem...
// O albergue utilizas faixas de preço de acordo com o número de diárias
// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diárias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;
// Outros fatos relevantes para determinar o valor da conta:
// - Ele acabou ganhando um desconto a mais de 10% do valor total porque 
// teve um “envolvimento emocional” com a moça que trabalha no balcão;
// - Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
// carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
// com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
// de desconto;
// - Ele se passou e vai pagar multa de R$150 por danos materiais.
// Criar um programa que lê o número de dias que ele vai ficar no albergue 
// e apresente o valor final da conta e sua composição (os detalhes, 
// pagamentos, descontos...);

import './css.css'
import { useState } from "react"

function Ex1() {
    const [diarias, setDiarias] = useState()
    const [precoTotal, setPrecoTotal] = useState()
    const [valorDias, setValorDias] = useState()
    const [multa, setMulta] = useState()
    const [desconto1, setDesconto1] = useState()
    const [desconto2, setDesconto2] = useState()

    function calculo(){
        if(diarias <= 5){
            let valorDiaria = Number(diarias) * 100
            let valorDiariaMulta = valorDiaria + Number(150)
            let descontoEmocional = (10/100) * valorDiaria
            let descontoUber = (15/100) * valorDiaria
            let valorTotal = valorDiariaMulta - (descontoEmocional + descontoUber)
            setPrecoTotal('R$' + valorTotal)
            setValorDias('R$' + valorDiaria)
            setMulta('R$150')
            setDesconto1('R$' + descontoEmocional)
            setDesconto2('R$' + descontoUber)

        }else if(diarias >= 6 && diarias <= 10){
            let valorDiaria = Number(diarias) * 90
            let valorDiariaMulta = valorDiaria + Number(150)
            let descontoEmocional = (10/100) * valorDiaria
            let descontoUber = (15/100) * valorDiaria
            let valorTotal = valorDiariaMulta - (descontoEmocional + descontoUber)
            setPrecoTotal(valorTotal)
            setValorDias('R$' + valorDiaria)
            setMulta('R$150')
            setDesconto1('R$' + descontoEmocional)
            setDesconto2('R$' + descontoUber)

        }else if(diarias >= 11){
            let valorDiaria = Number(diarias) * 80
            let valorDiariaMulta = valorDiaria + 150
            let descontoEmocional = (10/100) * valorDiaria
            let descontoUber = (15/100) * valorDiaria
            let valorTotal = valorDiariaMulta - (descontoEmocional + descontoUber)
            setPrecoTotal(valorTotal)
            setValorDias('R$' + valorDiaria)
            setMulta('R$150')
            setDesconto1('R$' + descontoEmocional)
            setDesconto2('R$' + descontoUber)
        }
    }

  return (
    <div className="css">
      <h2>Diárias</h2>
      <p>Digite o número de dias que você vai permanecer no albergue:</p>
      <input type="text" 
      value={diarias}
      onChange={ (event) => {setDiarias(event.target.value)} }
      />
      <br />
      <br />
      <button onClick={calculo}>Analise</button>
      <br />
      <br />
      Preço da diária sem desconto: {valorDias}
      <br />
      Desconto 1: {desconto1}
      <br />
      Desconto 2: {desconto2}
      <br />
      Valor da multa: {multa}
      <br />
      Valor final da compra: {precoTotal}
    </div>
  )
}

export default Ex1
