import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Render from './pages/Render'

function App() {

  const[pagina, setPagina] = useState(<Home />)
  // let idade
  // console.log(idade)
  // console.log(pagina)
  // idade = 19
  // setPagina(19)

  function mostrarHome(){
    setPagina(<Home />)
  }

  return (
    <>
      {/* <Home /> */}
      {/* <Page2 /> */}
      {/* <Page3 /> */}
      <nav>
        <button onClick={ mostrarHome }>Home</button>
        <button onClick={ () => {setPagina(<Page3 />)} } className="botão">Contato</button>
        <button onClick={ () => {setPagina(<Page2 />)}}>Não sei</button>
        <button onClick={ () => {setPagina(<Render />)}}>Render</button>
      </nav>
      {pagina}
    </>
  )
}

export default App
