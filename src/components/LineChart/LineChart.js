import './LineChart.scss'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';




function LineChartComponent({ lineData }) {
    return (
      <ResponsiveContainer className="radar-container">
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" fill="none" stroke="rgba(255, 1, 1, 1)" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  
  
  
  export default LineChartComponent;