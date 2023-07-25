import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import '../Home/Home.scss'
import '../../style/index.scss'


function Home() {
	return (
		<div className="container">
			<Nav/>
			<Sidebar/>
			<h1>Page d'accueil</h1>
		</div>
	);
}

export default Home;