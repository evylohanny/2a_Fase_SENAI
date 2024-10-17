import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/numeros712">Ex7.12</Link>
        <Link to="/numeros713">Ex7.13</Link>
    </nav>
  )
}

export default Navbar
