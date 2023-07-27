import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'

function Error() {
    return (
      <div className="container">
        <Nav/>
        <Sidebar/>
        <div className="container_error">
          <h1 className="container_error-title">404</h1>
        </div>
      </div>
    )
  }
  
export default Error