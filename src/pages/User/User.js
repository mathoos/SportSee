
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { USER_MAIN_DATA } from '../../data/Data';
import { USER_AVERAGE_SESSIONS } from '../../data/Data';
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import Resume from '../../components/Resume/Resume'
import UserName from '../../components/UserName/UserName'
import '../User/User.scss'
import '../../style/index.scss'

function getUserById(id) {
  const userId = parseInt(id, 10);
  const userFound = USER_MAIN_DATA.find(user => user.id === userId);
  const averageSessionsFound = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);

  if (userFound && averageSessionsFound) {
    return {
      ...userFound,
      averageSessions: averageSessionsFound.sessions
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
    return <div>User not found!</div>;
  }

  return (
    <div className="container">
      <Nav/>
      <Sidebar/>
      <UserName user={user}/>
      <div className="container_info">
        <p>coucou {user.sessions}</p>
        <div className="container_info-graph"></div>       
        <Resume user={user}/>
      </div>          
    </div>   
  );
}

export default User;