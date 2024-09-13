
// Mensagem Secreta: Peça ao usuário para digitar uma senha e, se a senha for "abracadabra", exiba uma mensagem secreta.

import { useState } from "react"
import './css.css'
import MensagemErrada from "./MensagemErrada"
import MensagemSuperSecreta from "./MensagemSuperSecreta"

function MensagemSecreta() {
    const [inputSenha, setInputSenha] = useState()
    const [mensagemSecreta, setMensagemSecreta] = useState(false)
    const [mensagemErrada, setMensagemErrada] = useState(false)

    function magica(){
        if(inputSenha == "Abracadabra" || inputSenha == "abracadabra"){
            setMensagemSecreta(true)
            setMensagemErrada(false)
        }else{
            setMensagemSecreta(false)
            setMensagemErrada(true)
        }
    }

  return (
    <div className="senha-container">
      <h2>Digite uma senha:</h2>
      <input type="text" 
      value={inputSenha}
      onChange={ (event) => {setInputSenha(event.target.value)}}
      />
      <br />
      <br />
      <button onClick={magica}>Mágica</button>
      <br />
      { mensagemSecreta && <MensagemSuperSecreta />}
      { mensagemErrada && <MensagemErrada />}
    </div>
  )
}

export default MensagemSecreta
