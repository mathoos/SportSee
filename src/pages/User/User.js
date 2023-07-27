import getUserById from "../../services/Services"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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





// Affichage de l'interface utilisateur à partir des données récupérées

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