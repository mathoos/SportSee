
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { USER_MAIN_DATA } from '../../data/Data';
import { USER_AVERAGE_SESSIONS } from '../../data/Data';
import { USER_ACTIVITY } from '../../data/Data';
import { USER_PERFORMANCE } from '../../data/Data';
import { BarChartModel } from '../../models/Models.js'
import { LineChartModel } from '../../models/Models.js'
import { RadarChartModel } from '../../models/Models.js'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import Resume from '../../components/Resume/Resume'
import UserName from '../../components/UserName/UserName'
import LineChartComponent from '../../components/LineChart/LineChart'
import BarChartComponent from '../../components/BarChart/BarChart'
import RadarChartComponent from '../../components/RadarChart/RadarChart'
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

    const barData = new BarChartModel(user.activitySessions).formattedData();
    const lineData = new LineChartModel(user.averageSessions).formattedData();
    const radarData = new RadarChartModel(user).formattedData();
    

    return (
        <div className="container">
            <Nav/>
            <Sidebar/>
            <UserName user={user}/>
            <div className="container_info">       
                <div className="container_info-graph">
                    <BarChartComponent barData={barData}/> 
                    <div className="container_info-graph--container">
                        <LineChartComponent lineData={lineData}/>
                        <RadarChartComponent radarData={radarData}/>
                    </div>          
                </div>       
                <Resume user={user}/>
            </div>          
        </div>   
    );
}

export default User;