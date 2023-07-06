import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { USER_MAIN_DATA , USER_AVERAGE_SESSIONS , USER_ACTIVITY , USER_PERFORMANCE } from '../../data/Data';
import { BarChartModel , LineChartModel , RadarChartModel } from '../../models/Models.js'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import Resume from '../../components/Resume/Resume'
import UserName from '../../components/UserName/UserName'
import LineChartComponent from '../../components/LineChart/LineChart'
import BarChartComponent from '../../components/BarChart/BarChart'
import RadarChartComponent from '../../components/RadarChart/RadarChart'
import '../User/User.scss'
import '../../style/index.scss'

// function getUserById(id) {
//     const userId = parseInt(id, 10); // convertir une chaîne en nombre en explicitant la conversion (décimale)
//     const userFound = USER_MAIN_DATA.find(user => user.id === userId);
//     const { sessions: averageSessions } = USER_AVERAGE_SESSIONS.find(session => session.userId === userId) || {};
//     const { sessions: activitySessions } = USER_ACTIVITY.find(session => session.userId === userId) || {};
//     const { data: performanceSessions, kind } = USER_PERFORMANCE.find(data => data.userId === userId) || {};

//     if (userFound && averageSessions && activitySessions && performanceSessions && kind) {
//         return {
//         ...userFound,
//         averageSessions,
//         activitySessions,
//         performanceSessions,
//         kind
//         };
//     }

//     return null;
// }


async function getUserById(id) { 
    try {
        const userId = parseInt(id, 10);
        const response = await axios.get(`http://localhost:3000/user/${userId}`); // On récupère la réponse complète de la requête Axios
        const userFound = response.data.data; // On récupère les données de l'utilisateur

        //On récupère les sessions de l'utilisateur grâce aux URL
        const averageSessionsResponse = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        const averageSessions = averageSessionsResponse.data.data.sessions;

        const activitySessionsResponse = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        const activitySessions = activitySessionsResponse.data.data.sessions;

        const performanceSessionsResponse = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        const performanceSessions = performanceSessionsResponse.data.data.data;
    
        // Si les données de l'utilisateur sont trouvées, on retourne un objet avec les différentes données récupérées
        if (userFound) {         
          return {
            data: userFound,
            averageSessions,
            activitySessions,
            performanceSessions,
          };
        }
    
        return null;
    } 

    catch (error) {
        console.error(error);
        return null;
    }
}

function User() {
    const { id } = useParams(); // On récupère l'id de l'utilisateur à partir des paramètres de l'URL

    // On initialise les états avec useState
    const [user, setUser] = useState(null);
    const [activitySessions, setActivitySessions] = useState([]);
    const [averageSessions, setAverageSessions] = useState([]);  
    const [performanceSessions, setPerformanceSessions] = useState([]);

    const navigate = useNavigate();

    // useEffect(() => {
    //     const userFound = getUserById(id);

    //     if (userFound) {
    //         setUser(userFound);
    //     } 
    // }, [id, navigate]);


    //On met à jour les données dès que l'id change
    useEffect(() => {
        const fetchData = async () => { 
            const userFound = await getUserById(id);
            if (userFound) {
                setUser(userFound.data);
                setActivitySessions(userFound.activitySessions);
                setAverageSessions(userFound.averageSessions);
                setPerformanceSessions(userFound.performanceSessions);
            }
        };
    
        fetchData();
    }, [id, navigate]);
    
    if (!user) {
        return <div>user inexistant</div>;
    }

    const barData = new BarChartModel(activitySessions).formattedData();
    const lineData = new LineChartModel(averageSessions).formattedData();
    const radarData = new RadarChartModel(performanceSessions).formattedData();
    

    // const barData = new BarChartModel(user.activitySessions).formattedData();
    // const lineData = new LineChartModel(user.averageSessions).formattedData();
    // const radarData = new RadarChartModel(user).formattedData();
    

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