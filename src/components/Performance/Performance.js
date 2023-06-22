import '../Performance/Performance.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function RadarChartComponent({ radarData }) {
    return (
      <ResponsiveContainer className="radar-container">
            <RadarChart className="radar" cx={200} cy={200} outerRadius={100} data={radarData}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="kind"/>
                <Radar name="Performance" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
            </RadarChart>
      </ResponsiveContainer>
    );
}
  
function Performance({ user }) {
    const { performanceSessions, kind } = user;

    const radarData = performanceSessions.map((data) => ({
        kind: kind[data.kind],
        value: data.value,
    }));

    return <RadarChartComponent radarData={radarData} />;
}
  
export default Performance;