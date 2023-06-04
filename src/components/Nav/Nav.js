import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import '../Nav/Nav.scss'
import logo from '../../assets/logo.svg'
import { USER_MAIN_DATA } from '../../data/Data';

function Nav() {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

  const dropdown = isVisible ? 'dropdown visible' : 'dropdown';

    return (
        <nav className="nav"> 
            <Link to="/">
                <img src={logo} className="nav_logo" alt='Logo SportSee'/>
            </Link> 
            <Link to="/" className="nav_link">Accueil</Link>
            <div className="nav_link" onClick={handleClick}>Profil
                <div className="nav_link-container">
                    <ul className={dropdown}>
                        {USER_MAIN_DATA.map(({id, userInfos}) =>           
                            <Link to={`/user/${id}`} key={id} className="dropdown_user">
                                {`${userInfos.firstName} ${userInfos.lastName}`}
                            </Link>   
                        )}    
                    </ul>
                </div>            
            </div>
            <Link to="/" className="nav_link">Réglages</Link>
            <Link to="/" className="nav_link">Communauté</Link>
        </nav>
    )
}

export default Nav