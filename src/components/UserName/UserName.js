import '../UserName/UserName.scss'

function UserName({ user }) {
 
    return ( 
        <div className="user">
            <h1 className="user_name">Bonjour <span>{`${user.userInfos.firstName} ${user.userInfos.lastName}`}</span></h1>
            <p className="user_accroche">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>   
    );
}

export default UserName