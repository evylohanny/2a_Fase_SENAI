
import { useState } from 'react'
import Login from '../components/Login'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import UsuarioLogado from '../components/UsuarioLogado'
import './Render.css'

function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)
  return (
    <div>
      <h1>Renderizações condicionais</h1>
      <div className='render-container'>
        <button onClick={ () => {setAdm(true)}}>Adm</button>
        <button onClick={ () => {setAdm(false)}}>Oreiassecas</button>
        { adm && <PainelAdm />}
      </div>

      <br />

      <div className='render-container'>
        <button onClick={ () => {setIdade(idade-1)}}>-</button>
        {idade}
        <button onClick={ () => {setIdade(idade+1)}}>+</button>
        { idade>=18 && <ProdutosParaMaiores />}
      </div>

      <br />

      <div className="render-container">
        <button onClick={ () => {setUsuario(true)}}>Logar</button>
        <button onClick={ () => {setUsuario(false)}}>10Logar</button>
        { usuario ? <UsuarioLogado /> : <Login /> }
      </div>

    </div>
  )
}

export default Render
