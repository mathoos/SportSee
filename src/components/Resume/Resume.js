import '../Resume/Resume.scss'
import kcal from '../../assets/icons/kcal.svg'
import proteins from '../../assets/icons/proteins.svg'
import glucids from '../../assets/icons/glucids.svg'
import lipides from '../../assets/icons/lipides.svg'

function Bloc({ icon, title, subtitle, backgroundColor, score }) {
    return (
      <div className="resume_bloc">
        <div className="resume_bloc-content">
            <figure className={`resume_bloc-content--icon ${backgroundColor}`}>
                <img src={icon} alt={subtitle} />
            </figure>
            <div className="resume_bloc-content--txt">
                <p className="bloc-title">{title}</p>
                <p className="bloc-subtitle">{subtitle}</p>
            </div>
        </div>
      </div>
    );
}


function Resume({user}) {
    return (
        <div className="resume"> 
            <Bloc icon={kcal} title={`${user.keyData.calorieCount}kCal`} subtitle="Calories" backgroundColor="calories"/>
            <Bloc icon={proteins} title={`${user.keyData.proteinCount}g`} subtitle="Protéines" backgroundColor="proteins"/>
            <Bloc icon={glucids} title={`${user.keyData.carbohydrateCount}g`} subtitle="Glucides" backgroundColor="glucids"/>
            <Bloc icon={lipides} title={`${user.keyData.lipidCount}g`} subtitle="Lipides" backgroundColor="lipides"/>   
        </div>
    )
}


export default Resume