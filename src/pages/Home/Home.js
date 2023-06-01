import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../Home/Home.scss'
import '../../style/index.scss'
import { Link } from 'react-router-dom'
import { USER_MAIN_DATA } from '../../data/Data';


function Home() {
  return (
    <div className="container">
      <Nav/>
      <Sidebar/>
      <div className="shoppingList">       
        {USER_MAIN_DATA.map(({ id}) =>           
          <Link to={`/user/${id}`} key={id}>
              click                  
          </Link>   
        )}      
      </div>
    </div>
  );
}

export default Home;