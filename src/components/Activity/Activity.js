import './Activity.scss'

function Activity({user}){
    return(
        <div className="coucou">
            {user.activitySessions.map(session => (
                <div key={session.day}>
                    <p>Day: {session.day}</p>
                    <p>Session Length: {session.sessionLength}</p>
                </div>
            ))}
        </div>      
    )   
}

export default Activity