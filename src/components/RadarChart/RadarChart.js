import './RadarChart.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function RadarChartComponent({ radarData }) {
    return (
        <div className="radar-container">
            <ResponsiveContainer>
                <RadarChart className="radar" cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid gridType="polygon" radialLines={false} />
                    <PolarAngleAxis dataKey="kind"/>
                    <Radar name="Performance" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
  
export default RadarChartComponent;