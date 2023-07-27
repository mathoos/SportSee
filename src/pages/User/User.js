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



function User() {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        user: null,
        activitySessions: [],
        averageSessions: [],
        performanceSessions: [],
        kind: [],
        loading: true, 
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userFound = await getUserById(id);
                if (userFound) {
                    setUserData({
                        user: userFound.data,
                        activitySessions: userFound.activitySessions,
                        averageSessions: userFound.averageSessions,
                        performanceSessions: userFound.performanceSessions,
                        kind: userFound.kind,
                        loading: false, 
                    });
                }
            } catch (error) {
                setUserData({
                    user: null,
                    activitySessions: [],
                    averageSessions: [],
                    performanceSessions: [],
                    kind: [],
                    loading: false, 
                });
            }
        };

        fetchData();
    }, [id, navigate]);

    const { user, loading } = userData;

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (!user) {
        return <Error/>
    }

    // Si les données sont disponibles, afficher l'interface utilisateur avec les données
    const { activitySessions, averageSessions, performanceSessions, kind } = userData;

    const barData = new BarChartModel(activitySessions).formattedData();
    const lineData = new LineChartModel(averageSessions).formattedData();
    const radarData = new RadarChartModel(performanceSessions, kind).formattedData();

    return (
        <div className="container">
            <Nav />
            <Sidebar />
            <UserName user={user} />
            <div className="container_info">
                <div className="container_info-graph">
                    <BarChartComponent barData={barData} />
                    <div className="container_info-graph--container">
                        <LineChartComponent lineData={lineData} />
                        <RadarChartComponent radarData={radarData} />
                        <PieChartComponent user={user} />
                    </div>
                </div>
                <Resume user={user} />
            </div>
        </div>
    );
}

export default User;