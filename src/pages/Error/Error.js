import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'

function Error() {
    return (
      <div className="container">
        <Nav/>
        <div className="container_error">
          <h1 className="container_error-title">404</h1>
          <p className="container_error-txt">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="container_error-link">Retourner sur la page d'accueil</Link>
        </div>
      </div>
    )
  }
  
export default Error