import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useEffect,useState} from "react";
import { Link } from 'react-router-dom';

function ListUser(){

    /*1. Definir url del api, generar peticiones asíncronas */
    const url="https://hoteliakuepa.herokuapp.com/users";

    /*2. Creó función para conectarse a la api y ejecutar petición tipo get */
    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*3. useState para guardar la respuesta de la petición en un estado*/
    const [list,setList]=useState([]);

    /*4 usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{ //promesa
            setList(response.data); //escribir en el useState List
        })
    },[])

    
    //console.log(list)
    
    return(
        
        <>
        <p><Link to='/'>volver</Link></p>
        <Table dark>
                <tr>
                    <th scope="row">No. Documento</th>
                    <th scope="row">Tipo <br/> Documento</th>
                    <th scope="row">Nombre Apellido</th>
                    <th scope="row">Fecha de nacimiento</th>
                    <th scope="row">Genero</th>
                    <th scope="row">Email</th>
                    <th scope="row">Telefono</th>
                    <th scope="row">Pais de origen</th>
                    <th scope="row">Contraseña</th>
                    <th scope="row">Tipo usuario</th>
                </tr>
                {list.map((us,index)=>(
                    <tr>
                        <td scope="row">{us._id}</td>
                        <td scope="row">{us.tipodoc}</td>
                        <td scope="row">{us.nombre} {us.apellido}</td>
                        <td scope="row">{us.fnacimiento}</td>
                        <td scope="row">{us.genero}</td>
                        <td scope="row">{us.email}</td>
                        <td scope="row">{us.telefono}</td>
                        <td scope="row">{us.paisorigen}</td>
                        <td scope="row">{us.password}</td>
                        <td scope="row">{us.tipouser}</td>
                        
                    </tr>
                ))
                }
                
            </Table>
        </>
    );







    }


export default ListUser;