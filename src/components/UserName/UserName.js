import '../UserName/UserName.scss'

function UserName({ user }) {
 
    return ( 
        <div className="username">
            <h1>Bonjour <span>{`${user.userInfos.firstName} ${user.userInfos.lastName}`}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier !</p>
        </div>   
    );
}

export default UserName