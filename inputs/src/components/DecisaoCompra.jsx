// Decisão de Compra: Peça ao usuário para inserir o preço de um item e seu saldo. Em seguida, determine se eles podem comprar o item ou não.

import { useState } from "react"
import Nao from "./Nao"
import Sim from "./Sim"

function DecisaoCompra() {
    const [preco, setPreco] = useState()
    const [saldo, useSaldo] = useState()
    const [sim, setSim] = useState(false)
    const [nao, setNao] = useState(false)

    function decisao(){
        if(saldo > preco){
            setSim(true)
            setNao(false)
        }else{
            setSim(false)
            setNao(true)
        }
    }

  return (
    <div className="senha-container">
      <h2>Decisão de Compra</h2>
      <p>Insira o preço do item:</p>
      <input type="text" 
      value={preco}
      onChange={ (event) => {setPreco(event.target.value)} }
      />
      <br />
      <br />
      Saldo do item:
      <br />
      <input type="text" 
      value={saldo}
      onChange={ (event) => {setSaldo(event.target.value)} }
      />
      <br />
      <br />
      <button onClick={decisao}>Decisão</button>
      <br />
      { sim && <Sim />}
      { nao && <Nao />}
    </div>
  )
}

export default DecisaoCompra
