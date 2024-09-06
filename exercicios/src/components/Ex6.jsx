// Faça um programa que leia duas notas parciais obtidas por um 
// aluno qualquer numa disciplina qualquer ao longo de um semestre 
// qualquer, e calcule a sua média. De posse da média, esta deve ser 
// convertida em conceito que é o novo hype do momento na educação!
// A conversão deve seguir a regra descrita abaixo:
// Nota Conceito
// Entre ]9.0[ e [10.0] A
// Entre ]7.5[ e [9.0] B
// Entre ]6.0[ e [7.5] C
// Entre ]4.0[ e [6.0] D
// Entre [0.0] e [4.0] E
// O resultado deste programa deve ser um relatório contendo as notas do 
// aluno, sua média e o conceito atingido.

import { useState } from "react"
import './Media.css'

function Ex6() {

    const [resultado, setResultado] = useState()
    const [media, setMedia] = useState()
    const [notas, setNotas] = useState()

    function calcule(){
        let nota1 = Number(prompt("Digite a 1a nota: "))
        let nota2 = Number(prompt("Digite a 2a nota: "))
        let media = (nota1 + nota2) / 2

        switch(true){

            case media >= 9 || media == 10:
                setResultado("A")
                setMedia(media)
                setNotas(nota1 + " , " + nota2)
                break

            case media >= 7.5 || media < 9:
                setResultado("B")
                setMedia(media)
                setNotas(nota1 + " , " + nota2)
                break

            case media >= 6 || media < 7.5:
                setResultado("C")
                setMedia(media)
                setNotas(nota1 + " , " + nota2)
                break

            case media >= 4 || media < 6:
                setResultado("D")
                setMedia(media)
                setNotas(nota1 + " , " + nota2)
                break

            case media < 4:
                setResultado("E")
                setMedia(media)
                setNotas(nota1 + " , " + nota2)
                break
                
        }
    }

  return (
    <div className="Media-Container">
      <button onClick={calcule}>Calcule sua Média</button>
      <br />
      Notas: {notas}
      <br />
      Média: {media}
      <br />
      Conceito atingido: {resultado}
    </div>
  )
}

export default Ex6
