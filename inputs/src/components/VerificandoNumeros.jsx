// Verificando Números Pares: Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.

import { useState } from "react"
import Impar from "./Impar"
import Par from "./Par"

function VerificandoNumeros() {
    const [numero, setnumero] = useState()
    const [par, setPar] = useState(false)
    const [impar, setImpar] = useState(false)

    function verificacao(){
        if(numero % 2 == 0){
            setPar(true)
            setImpar(false)
        }else{
            setPar(false)
            setImpar(true)
        }
    }

  return (
    <div className="senha-container">
      <h2>Verificando Números de Pares</h2>
      Insira um número:
      <br />
      <input type="text" 
      value={numero}
      onChange={ (event) => {setnumero(event.target.value)} }
      />
      <br />
      <br />
      <button onClick={verificacao}>Par ou Ímpar?</button>
      <br />
      { par && <Par />}
      { impar && <Impar />}
    </div>
  )
}

export default VerificandoNumeros
