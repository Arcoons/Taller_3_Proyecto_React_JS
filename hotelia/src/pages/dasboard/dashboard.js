import './dashboard.css'
import Menu from "../../Components/menuLateral/menu"
import Formulario from '../../Components/dashboard/Formulario'

function Dashboard(){
    return(
      <div className="container">
        <Menu/>
        <Formulario/>
      </div>
    );
  }
  
  export default Dashboard;