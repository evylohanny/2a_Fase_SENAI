import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Numeros712() {
    const [ inputNumero, setInputNumero ] = useState("")
    const [ contagem, setContagem] = useState(0)
    const [ mostrarResultado, setMostrarResultado ] = useState(false)

    function lerNumero(){
        if(inputNumero > 100 && inputNumero < 200){
            setContagem( contagem + 1 )
        }
    }

    function renderizarResultado(){
        setMostrarResultado(true)
    }

  return (
    <div>
        <center>
        <Navbar />
        <h1>Exercício 7.12</h1>
        <p><strong></strong></p>
        <input type="text" 
        value={inputNumero}
        onChange={ (event) => setInputNumero(event.target.value)}
        className="input"
        />
        <br /><br />
        <button onClick={lerNumero}>LER</button>
        <br /><br />
        <button onClick={renderizarResultado}>RESULTADO</button>

        {mostrarResultado &&
            <div>
                <p>Números na faixa 100 a 200: {contagem}</p>
            </div>
        }
        </center>
    </div>
  )
}

export default Numeros712
