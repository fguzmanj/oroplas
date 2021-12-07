import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import CreateUsers from "../components/CreateUsers"

import './HomeAdmin.scss'



const GestionarUsuario = () => {
    return (
        <div>
            <div className="DashAdmin">
              <Navbar />
              <div className="flex">
                  <Sidebar /> 
                  <div className="container">
                    <CreateUsers />                        
                  </div>                        
             </div>
            </div>
        </div>
    )
}

export default GestionarUsuario