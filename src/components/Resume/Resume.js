import '../Resume/Resume.scss'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import kcal from '../../assets/icons/kcal.svg'
import proteins from '../../assets/icons/proteins.svg'
import glucids from '../../assets/icons/glucids.svg'
import lipides from '../../assets/icons/lipides.svg'

function Bloc({ icon, title, subtitle, backgroundColor, score }) {
    return (
      <div className="resume_bloc">
        <figure className={`resume_bloc-icon ${backgroundColor}`}>
            <img src={icon} alt={subtitle} />
        </figure>
        <div className="resume_bloc-txt">
            <p className="resume_bloc-txt--title">{title}</p>
            <p className="resume_bloc-txt--subtitle">{subtitle}</p>
            <p>{score}</p>
        </div>
      </div>
    );
}

// function Score({score}){
//     const percentage = score * 100;
//     return `${percentage.toFixed(2)}%`;
// }


function Score({ score }) {
    const percentage = score * 100;
    const total = 100 - percentage;
  
    const data = [
      { name: 'Score', value: percentage },
      { name: 'total', value: total },
    ];
  
    const scoreColor = '#8884d8'; // Couleur du secteur du score
  
    return (
      
        <RadialBarChart width={200} height={200} cx={100} cy={100} innerRadius={30} outerRadius={80} barSize={10} data={data}>
          <RadialBar minAngle={15} background clockWise={true} dataKey="value" cornerRadius={10} fill={scoreColor} />
          <Tooltip />
        </RadialBarChart>
      
    );
  }

function Resume({user}) {
    return (
        <div className="resume"> 
            <Bloc icon={kcal} title={`${user.keyData.calorieCount} kCal`} subtitle="Calories" backgroundColor="calories"/>
            <Bloc icon={proteins} title={`${user.keyData.proteinCount} g`} subtitle="Protéines" backgroundColor="proteins"/>
            <Bloc icon={glucids} title={`${user.keyData.carbohydrateCount} g`} subtitle="Glucides" backgroundColor="glucids"/>
            <Bloc icon={lipides} title={`${user.keyData.lipidCount} g`} subtitle="Lipides" backgroundColor="lipides"/>   
            <Score score={user.score}/>   
        </div>
    )
}


export default Resume