import './BarChart.scss'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
	  return (
		<div className="custom-tooltip">
		  <p className="value">{`${payload[0].value}kg`}</p>
		  <p className="value">{`${payload[1].value}Kcal`}</p>
		</div>
	  );
	}
  
	return null;
  };

function BarChartComponent({ barData }) {
	return (
		
		<div className="bar-container">
			<div className="bar-container_top">
				<p className="bar-container_top-title">Activité quotidienne</p>
				<div className="bar-container_top-bloc">
					<div className="categorie">
						<div className="bullet kg"></div>
						<p>Poids (kg)</p>
					</div>
					<div className="categorie">
						<div className="bullet kcal"></div>
						<p>Calories brûlées (Kcal)</p>
					</div>
				</div>
			</div>
			<ResponsiveContainer>
				<BarChart className="bar" barGap={10} data={barData}>
					<CartesianGrid vertical={false}/>
					<XAxis dataKey="day" />
					<YAxis  domain={[0, 400]}/>
					<Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }} /> {/* Utilisez CustomTooltip pour personnaliser le contenu de l'encart */}
					<Tooltip />
					<Bar dataKey="kilogram" fill="rgba(40, 45, 48, 1)" radius={[50, 50, 0, 0]} barSize={7}/>
					<Bar dataKey="calories" fill="rgba(230, 0, 0, 1)" radius={[50, 50, 0, 0]} barSize={7}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
  
export default BarChartComponent;