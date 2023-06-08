import '../Performance/Performance.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';



function Performance({user}){

    const radarData = user.performanceSessions.map((data) => ({
        kind: user.kind[data.kind],
        value: data.value,
    }))

    return(
        <RadarChart className="radar" cx={200} cy={200} width={400} height={400} outerRadius={100} data={radarData}> 
            <PolarGrid/>
            <PolarAngleAxis dataKey="kind"/>
            <Radar name="Performance" dataKey="value" fill="rgba(255, 1, 1, 0.7)"/>
        </RadarChart>  
    )   
}

export default Performance