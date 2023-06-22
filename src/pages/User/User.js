
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { USER_MAIN_DATA } from '../../data/Data';
import { USER_AVERAGE_SESSIONS } from '../../data/Data';
import { USER_ACTIVITY } from '../../data/Data';
import { USER_PERFORMANCE } from '../../data/Data';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import Resume from '../../components/Resume/Resume'
import UserName from '../../components/UserName/UserName'
import Average from '../../components/AverageSessions/AverageSessions'
import BarChartComponent from '../../components/Activity/Activity'
import Performance from '../../components/Performance/Performance'
import '../User/User.scss'
import '../../style/index.scss'

function getUserById(id) {
  const userId = parseInt(id, 10); // convertir une chaîne en nombre en explicitant la conversion (décimale)
  const userFound = USER_MAIN_DATA.find(user => user.id === userId);
  const { sessions: averageSessions } = USER_AVERAGE_SESSIONS.find(session => session.userId === userId) || {};
  const { sessions: activitySessions } = USER_ACTIVITY.find(session => session.userId === userId) || {};
  const { data: performanceSessions, kind } = USER_PERFORMANCE.find(data => data.userId === userId) || {};

  if (userFound && averageSessions && activitySessions && performanceSessions && kind) {
    return {
      ...userFound,
      averageSessions,
      activitySessions,
      performanceSessions,
      kind
    };
  }

  return null;
}

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userFound = getUserById(id);
    if (userFound) {
      setUser(userFound);
    } 
  }, [id, navigate]);
  
  if (!user) {
    return <div>blabla</div>;
  }

  const barData = user.activitySessions.map(session => ({
    day: session.day,
    kilogram: session.kilogram,
    calories: session.calories
  }));

  return (
    <div className="container">
      <Nav/>
      <Sidebar/>
      <UserName user={user}/>
      <div className="container_info">       
        <div className="container_info-graph">
          <BarChartComponent barData={barData}/> 
          <div className="container_info-graph--container">
            <Average user={user}/>
            <Performance user={user}/>
          </div>          
        </div>       
        <Resume user={user}/>
      </div>          
    </div>   
  );
}

export default User;