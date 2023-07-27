import axios from 'axios';
import { USER_MAIN_DATA , USER_AVERAGE_SESSIONS , USER_ACTIVITY , USER_PERFORMANCE } from '../data/Data';
import Error from '../pages/Error/Error';


// Données mockées

// function getUserById(id) {
//     const userId = parseInt(id, 10); // convertir une chaîne en nombre en explicitant la conversion (décimale)
//     const userFound = USER_MAIN_DATA.find(user => user.id === userId);
//     const averageSessions = (USER_AVERAGE_SESSIONS.find(session => session.userId === userId) || {}).sessions || [];
//     const activitySessions = (USER_ACTIVITY.find(session => session.userId === userId) || {}).sessions || [];
//     const performanceSessions = USER_PERFORMANCE.find(data => data.userId === userId) || {};

//     if (userFound) {
//         return {
//             data : userFound,
//             averageSessions,
//             activitySessions,
//             performanceSessions : performanceSessions.data,
//             kind : performanceSessions.kind
//         };
//     }

//     return null;
// }


// Données fetchées

async function getUserById(id) { 
    try {
        const userId = parseInt(id, 10);
        const baseURL = 'http://localhost:3000/user/'; // On créé une URL de base (si elle change, on n'a à la modifier qu'une seule fois)

        const instanceURL = axios.create({
            baseURL: baseURL,
        });

        const response = await instanceURL.get(`${userId}`);
        const userFound = response.data.data;

        const averageSessionsResponse = await instanceURL.get(`${userId}/average-sessions`);
        const averageSessions = averageSessionsResponse.data.data.sessions;

        const activitySessionsResponse = await instanceURL.get(`${userId}/activity`);
        const activitySessions = activitySessionsResponse.data.data.sessions;

        const performanceSessionsResponse = await instanceURL.get(`${userId}/performance`);
        const performanceSessions = performanceSessionsResponse.data.data;
    
        // Si les données de l'utilisateur sont trouvées, on retourne un objet avec les différentes données récupérées
        if (userFound) {         
          return {
            data: userFound,
            averageSessions,
            activitySessions,
            kind : performanceSessions.kind,
            performanceSessions : performanceSessions.data
          };
        }
    
        return null;
    } 

    catch (error) {
        return<Error/>
    }
}

export default getUserById;