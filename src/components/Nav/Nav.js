import { Link } from 'react-router-dom'
import '../Nav/Nav.scss'
import logo from '../../assets/logo.svg'

function Nav() {

    return (
        <nav className="nav"> 
            <Link to="/" className="nav_logo">
                <img src={logo}  alt='Logo SportSee'/>
            </Link> 
            <Link to="/" className="nav_link">Accueil</Link>
            <Link to="/" className="nav_link">Profil</Link>
            <Link to="/" className="nav_link">Réglages</Link>
            <Link to="/" className="nav_link">Communauté</Link>
        </nav>
    )
}

export default Nav