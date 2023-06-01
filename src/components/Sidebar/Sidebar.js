import '../Sidebar/Sidebar.scss'
import yoga from '../../assets/icons/yoga.svg'
import natation from '../../assets/icons/natation.svg'
import bicycle from '../../assets/icons/bicycle.svg'
import haltere from '../../assets/icons/haltere.svg'


function Sidebar() {

    return (
        <nav className="sidebar"> 
            <div className="sidebar_icons">
                <figure className="sidebar_icons-icon">
                    <img src={yoga} alt=""/>
                </figure>
                <figure className="sidebar_icons-icon">
                    <img src={natation} alt=""/>
                </figure>
                <figure className="sidebar_icons-icon">
                    <img src={bicycle} alt=""/>
                </figure>
                <figure className="sidebar_icons-icon">
                    <img src={haltere} alt=""/>
                </figure>
            </div>
            <p>Copyright, SportSee 2020</p>
            
        </nav>
    )
}

export default Sidebar