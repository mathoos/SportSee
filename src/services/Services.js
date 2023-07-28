import axios from 'axios';
import { USER_MAIN_DATA , USER_AVERAGE_SESSIONS , USER_ACTIVITY , USER_PERFORMANCE } from '../data/Data';
import Error from '../pages/Error/Error';

// faire une condition pour accéder au données mockées ou fetchées dans une seule fonction



async function getUserById(id) {
	try {
		const userId = parseInt(id, 10);
		const baseURL = 'http://localhost:3000/user/'; // On créé une URL de base (si elle change, on n'a à la modifier qu'une seule fois)
		
		const instanceURL = axios.create({
			baseURL: baseURL,
		});
	
		let userFound = null;
		let averageSessions = [];
		let activitySessions = [];
		let performanceSessions = {};
  
		try {
			const response = await instanceURL.get(`${userId}`);
			userFound = response.data.data;
	
			const averageSessionsResponse = await instanceURL.get(`${userId}/average-sessions`);
			averageSessions = averageSessionsResponse.data.data.sessions;
	
			const activitySessionsResponse = await instanceURL.get(`${userId}/activity`);
			activitySessions = activitySessionsResponse.data.data.sessions;
	
			const performanceSessionsResponse = await instanceURL.get(`${userId}/performance`);
			performanceSessions = performanceSessionsResponse.data.data;
		} 

		// Si les données fetchées ne sont pas disponibles, alors on utilise les données mockées
		catch (error) {		
			userFound = USER_MAIN_DATA.find(user => user.id === userId) || null;
			averageSessions = (USER_AVERAGE_SESSIONS.find(session => session.userId === userId) || {}).sessions || [];
			activitySessions = (USER_ACTIVITY.find(session => session.userId === userId) || {}).sessions || [];
			performanceSessions = USER_PERFORMANCE.find(data => data.userId === userId) || {};
		}
  
		if (userFound) {
			return {
				data: userFound,
				averageSessions,
				activitySessions,
				kind: performanceSessions.kind,
				performanceSessions: performanceSessions.data
			};
		}
  
	  return null;
	}

	catch (error) {
	  	return <Error />;
	}
}
  


export default getUserById;