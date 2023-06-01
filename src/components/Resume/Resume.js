import '../Resume/Resume.scss'
import Bloc from '../../components/Bloc/Bloc'
import kcal from '../../assets/icons/kcal.svg'
import proteins from '../../assets/icons/proteins.svg'
import glucids from '../../assets/icons/glucids.svg'
import lipides from '../../assets/icons/lipides.svg'


function Resume({user}) {

    return (
        <div className="resume"> 
            <Bloc icon={kcal} title={`${user.keyData.calorieCount} kCal`} subtitle="Calories" backgroundColor="calories"/>
            <Bloc icon={proteins} title={`${user.keyData.proteinCount}`} subtitle="Protein" backgroundColor="proteins"/>
            <Bloc icon={glucids} title={`${user.keyData.carbohydrateCount}`} subtitle="Carbohydrates" backgroundColor="glucids"/>
            <Bloc icon={lipides} title={`${user.keyData.lipidCount}`} subtitle="Lipids" backgroundColor="lipides"/>          
        </div>
    )
}

export default Resume