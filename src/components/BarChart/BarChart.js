import './BarChart.scss'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar,  ResponsiveContainer } from 'recharts';


function BarChartComponent({ barData }) {
  return (
    <div className="chart-container">
      <ResponsiveContainer className="bar-container">
        <BarChart className="bar" data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis interval={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="rgba(255, 1, 1, 0.7)" />
          <Bar dataKey="calories" fill="rgba(1, 255, 1, 0.7)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
  
export default BarChartComponent;