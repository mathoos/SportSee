import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import User from '../User/User'
import '../Home/Home.scss'
import '../../style/index.scss'


function Home() {
  return (
    <div className="container">
      <Nav/>
      <Sidebar/>
      <User/>
    </div>
  );
}

export default Home;