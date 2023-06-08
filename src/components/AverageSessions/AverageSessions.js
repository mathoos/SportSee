import './AverageSessions.scss'

function AverageSessions({user}){
    return(
        <div className="coucou">
            {user.averageSessions.map(session => (
                <div key={session.day}>
                    <p>Day: {session.day}</p>
                    <p>Session Length: {session.sessionLength}</p>
                </div>
            ))}
        </div>      
    )   
}

export default AverageSessions