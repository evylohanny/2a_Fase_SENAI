
// Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).

import { useState } from "react"

function Ativ() {
    const [resultado, setResultado] = useState()
    const [mensagem, setMensagem] = useState()

    function clique(){

        switch(true){

            case resultado==1:
                setMensagem("Domingo")
                break

            case resultado==2:
                setMensagem("Segunda-Feira")
                break

            case resultado==3:
                setMensagem("Terça-Feira")
                break

            case resultado==4:
                setMensagem("Quarta-Feira")
                break

            case resultado==5:
                setMensagem("Quinta-Feira")
                break

            case resultado==6:
                setMensagem("Sexta-Feira")
                break

            case resultado==7:
                setMensagem("Sábado")
                break

            default:
                setMensagem("Número digitado inválido")
        }
        
    }

  return (
    <div className="senha-container">
        <h2>Digite um número de 1 a 7:</h2>
        <input type="number"
        value={resultado}
        onChange={ (event) => {setResultado(event.target.value)}}
        />
        <br />
        <br />
        <button onClick={clique}>Clique</button>
        <br />
        <br />
        {mensagem}
    </div>
  )
}

export default Ativ
