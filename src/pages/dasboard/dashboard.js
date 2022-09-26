import Menu from "../../components/menuLateral/menu"
import Formulario from "../../components/dashboard/Formulario"

function Dashboard(){
    return(
      <div className="container">
        <Menu/>
        <Formulario/>
      </div>
    );
  }
  
  export default Dashboard;