import './LineChart.scss'
import { ResponsiveContainer, LineChart, YAxis, XAxis, Tooltip, Line } from 'recharts';

const CustomTooltip = ({ payload, active }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<p>{`${payload[0].value}min`}</p>
			</div>
		);
	}
	return null;
};

function LineChartComponent({ lineData }) {
	return (
		<div className="line-container">
			<p className="line-container_title">Durée moyenne des sessions</p>
			<ResponsiveContainer>
				<LineChart data={lineData}  margin={{top: 0, right: 10, left: 10, bottom: 0}} >  
					<YAxis hide={true}  axisLine={false} tickLine={false} domain={[0, 100]} />
					<XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#FFFFFF', opacity: '0.5', }}/>
					<Tooltip offset={0} content={<CustomTooltip/>}/>
					<Line type="monotone" dataKey="sessionLength" stroke="url(#gradient)" strokeWidth={2} dot={false}/>
					<defs>
						<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="1.19%" stopColor="#FFFFFF" />
							<stop offset="81.27%" stopColor="rgba(255, 255, 255, 0.403191)" />
						</linearGradient>
					</defs>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
   
  
export default LineChartComponent;