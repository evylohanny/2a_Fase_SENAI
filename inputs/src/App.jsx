
import { useState } from 'react'
import './App.css'
import Ativ from './components/Ativ'
import DecisaoCompra from './components/DecisaoCompra'
import Maior from './components/Maior'
import Menor from './components/Menor'
import MensagemSecreta from './components/MensagemSecreta'
import VerificandoNumeros from './components/VerificandoNumeros'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const[maior, setMaior] = useState(false)
  const[menor, setMenor] = useState(false)

  function processarIdade(){
    if(inputIdade >= 18){
      // alert("Maior de Idade")
      setMaior(true)
      setMenor(false)
    }else{
      // alert("Dimenó")
      setMenor(true)
      setMaior()
    }
  }

  return (
    <>
    <div className='senha-container'>
      <h1>Inputs</h1>

      Idade: 
      <input type="number" className='formularios'
      value={inputIdade}
      onChange={ (event) => {setInputIdade(event.target.value)} }
      />
      <br />
      <br />
      <button onClick={processarIdade}>Processar Idade</button>
      {/* <br />
      {inputIdade} */}
      { maior && <Maior />}
      { menor && <Menor />}
    </div>
      <br />
      <br />
      <Ativ />
      <br />
      <br />
      <MensagemSecreta />
      <br />
      <br />
      <DecisaoCompra />
      <br />
      <br />
      <VerificandoNumeros />

    </>
  )
}

export default App
