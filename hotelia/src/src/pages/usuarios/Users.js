import { Link } from "react-router-dom";
import ListUser from "../../Components/ListUser";

function Users(){
    return(
        <>
            <Link to="/new">Nuevo Usuario</Link>
            <h1>Lista Usuarios</h1>

            <ListUser/>
        </>
    );
}

export default Users;