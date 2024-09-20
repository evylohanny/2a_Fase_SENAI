// Enzo e Valentina:
// Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
// enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
// ano. Crie um programa/script/algoritmo que mostre quando Enzo será mais 
// alto que Valentina.

import { useState } from "react"
import './css.css'

function Ex3() {
  const [resultado, setResultado] = useState()
  let alturaEnzo = 1.40
  let alturaValen = 1.50
  let anos = 0

  function resposta(){
    while(alturaEnzo <= alturaValen){
      alturaEnzo = alturaEnzo + 0.03
      alturaValen = alturaValen + 0.02
      anos++
    }
    setResultado(anos + ' anos')
  }

  return (
    <div className="css">
      <h2>Enzo e Valentina</h2>
      <div>
        <button onClick={resposta}>Resposta</button>
      </div>
      <div>
        Enzo será mais alto que Valentina em: {resultado}
      </div>
    </div>
  )
}

export default Ex3
