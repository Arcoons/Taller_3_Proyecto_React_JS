import { Link } from "react-router-dom";
import ListUser from "../../Components/ListUser";
import logo from"./Hotelia horizontal negro.svg";

function Users(){
    return(
        <>
            <Link to="/new">Nuevo Usuario</Link>
            
          
            <img src={logo}/>

            <ListUser/>
        </>
    );
}

export default Users;