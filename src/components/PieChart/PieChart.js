import './PieChart.scss'
import {PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


function PieChartComponent({ user }) {
    const percentage = (user.score || user.todayScore) * 100;
    const difference = 100 - percentage;
  
    const data = [
        { name: 'Percentage', value: percentage },
        { name: 'Difference', value: difference }
    ];

  
    return (
        <div className="pie-container">    
            <p className="pie-container_score">{percentage}% <br/>de votre objectif</p>
    
            <ResponsiveContainer className="responsive-container">
                <PieChart>
                    <Pie nameKey="name"cx="50%" cy="50%" startAngle={-270} stroke="none" data={data} dataKey="value" outerRadius={85} innerRadius={75} paddingAngle={0} cornerRadius={50}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} className={`${entry.name === 'Difference' ? 'difference-path' : ''} ${entry.name === 'Percentage' ? 'percentage-path' : ''}`}/>
                        ))}
                    </Pie>
                    <Pie nameKey="name" cx="50%" cy="50%" startAngle={-270} endAngle={90} stroke="none" dataKey="value" 
                        outerRadius={75} innerRadius={0} className="circle-path"
                        data={[{ name: 'Full', value: 100 }]} >
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}


export default PieChartComponent;