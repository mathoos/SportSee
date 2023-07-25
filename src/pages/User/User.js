import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { USER_MAIN_DATA , USER_AVERAGE_SESSIONS , USER_ACTIVITY , USER_PERFORMANCE } from '../../data/Data';
import { BarChartModel , LineChartModel , RadarChartModel } from '../../models/Models.js'
import Nav from '../../components/Nav/Nav'
import Error from '../Error/Error';
import Sidebar from '../../components/Sidebar/Sidebar'
import PieChartComponent from '../../components/PieChart/PieChart'
import Resume from '../../components/Resume/Resume'
import UserName from '../../components/UserName/UserName'
import LineChartComponent from '../../components/LineChart/LineChart'
import BarChartComponent from '../../components/BarChart/BarChart'
import RadarChartComponent from '../../components/RadarChart/RadarChart'
import '../User/User.scss'
import '../../style/index.scss'


//Données mockées
function getUserById(id) {
    const userId = parseInt(id, 10); // convertir une chaîne en nombre en explicitant la conversion (décimale)
    const userFound = USER_MAIN_DATA.find(user => user.id === userId);
    const averageSessions = (USER_AVERAGE_SESSIONS.find(session => session.userId === userId) || {}).sessions || [];
    const activitySessions = (USER_ACTIVITY.find(session => session.userId === userId) || {}).sessions || [];
    const performanceSessions = USER_PERFORMANCE.find(data => data.userId === userId) || {};

    if (userFound) {
        return {
            data : userFound,
            averageSessions,
            activitySessions,
            performanceSessions : performanceSessions.data,
            kind : performanceSessions.kind
        };
    }

    return null;
}

// Données fetchées
// async function getUserById(id) { 
//     try {
//         const userId = parseInt(id, 10);
//         const baseURL = 'http://localhost:3000/user/'; // On créé une URL de base (si elle change, on n'a à la modifier qu'une seule fois)

//         const instanceURL = axios.create({
//             baseURL: baseURL,
//         });

//         const response = await instanceURL.get(`${userId}`);
//         if (!response.ok) {
//             // Handle non-2xx status codes (e.g., 404, 500, etc.) as errors
//             throw new Error('Network response was not ok');
//           }
//         const userFound = response.data.data;

//         const averageSessionsResponse = await instanceURL.get(`${userId}/average-sessions`);
//         const averageSessions = averageSessionsResponse.data.data.sessions;

//         const activitySessionsResponse = await instanceURL.get(`${userId}/activity`);
//         const activitySessions = activitySessionsResponse.data.data.sessions;

//         const performanceSessionsResponse = await instanceURL.get(`${userId}/performance`);
//         const performanceSessions = performanceSessionsResponse.data.data;
    
//         // Si les données de l'utilisateur sont trouvées, on retourne un objet avec les différentes données récupérées
//         if (userFound) {         
//           return {
//             data: userFound,
//             averageSessions,
//             activitySessions,
//             kind : performanceSessions.kind,
//             performanceSessions : performanceSessions.data
//           };
//         }
    
//         return null;
//     } 

//     catch (error) {
//         return<Error/>
//     }
// }

function User() {
    const { id } = useParams(); // On récupère l'id de l'utilisateur à partir des paramètres de l'URL

    // On initialise les états avec useState
    const [user, setUser] = useState(null);
    const [activitySessions, setActivitySessions] = useState([]);
    const [averageSessions, setAverageSessions] = useState([]);  
    const [performanceSessions, setPerformanceSessions] = useState([]);
    const [kind, setKindSessions] = useState([]);

    const navigate = useNavigate();


    //On met à jour les données dès que l'id change
    useEffect(() => {
        const fetchData = async () => { 
            const userFound = await getUserById(id);
            if (userFound) {
                setUser(userFound.data);
                setActivitySessions(userFound.activitySessions);
                setAverageSessions(userFound.averageSessions);
                setPerformanceSessions(userFound.performanceSessions);
                setKindSessions(userFound.kind);
            }
        };
    
        fetchData();
    }, [id, navigate]);
    
    if (!user) {
        return <Error/>
    }

    const barData = new BarChartModel(activitySessions).formattedData();
    const lineData = new LineChartModel(averageSessions).formattedData();
    const radarData = new RadarChartModel(performanceSessions, kind).formattedData();

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
                        <PieChartComponent user={user}/>
                    </div>          
                </div>       
                <Resume user={user}/>
            </div>          
        </div>   
    );
}

export default User;