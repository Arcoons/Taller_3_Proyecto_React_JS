import { Link } from 'react-router-dom';
import '../../Components/css-registro/Registro.css'
import Logoblanco from './Hotelia horizontal blanco.svg'
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';



function Registro() {

      const history=useNavigate();

      const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",
      fnacimiento:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
    
      const handleChange=({target})=>{
            setData({
                  ...data,
                  [target.name]:target.value
            })
      }

    const url="https://hoteliakuepa.herokuapp.com/users";  

        const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await axios.post(url,data);
            if (response.status === 201) 
            {
                  Swal.fire(
                        'Guardado!',
                        `El huesped ha sido guardado exitosamente!`,
                        'success'
                  )     
                  history.push("/")
            
            }else {
                  Swal.fire(
                        'Error!',
                        'Hubo un problema al registrar el huesped!',
                        'error'
                  )

            }
        }

      return (
            <body className='registro'>           
                  
                  <section className="container-grid">
                        <div className="logoRegi">
                              <div className="img">
                                    <img src={Logoblanco} alt="" />
                                    <div className="bienvenido"><p>Eres más que bienvenido</p></div>
                                    <div className="text"><p>un lugar en tu corazó<nav></nav></p></div>
                              </div>
                        </div>
                        <div class="formulario">
                              <Container>
                              <div className="tittle"><h1>Regístrate</h1></div>
                              <Form class="form" onSubmit={handleSubmit}>
                                    <div className="doc">
                                          <div className="inf">
                                                <label className="tip-doc">Tipo de documento</label>
                                                <select name="tipodoc" className="tip-doc" onChange={handleChange}>
                                                      <option>Escoja una opción</option>
                                                      <option value="Cédula">Cédula</option>
                                                      <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                                      <option value="Otro">Otro</option>
                                                </select>
                                          </div>
                                          <div className="inf">
                                                <label>Número documento</label>
                                                <input type="text" name="_id" placeholder="10000000" className='inputsRegistro' value={data._id} onChange={handleChange} />
                                          </div>
                                    </div>
                                    <div className="nom">
                                          <div className="inf">
                                                <label >Nombres</label>
                                                <input type="text" name="nombre" placeholder="Nombres..." className='inputsRegistro' value={data.nombre} onChange={handleChange} />
                                          </div>
                                          <div className="inf">
                                                <label >Apellidos</label>
                                                <input type="text" name="apellido" placeholder="Apellidos..." className='inputsRegistro' value={data.apellido} onChange={handleChange} />
                                          </div>
                                    </div>
                                    <div className="dat">
                                          <div className="inf">
                                                <label >Fecha de nacimiento</label>
                                                <input type="date" name="fnacimiento" className='inputsRegistro' value={data.fnacimiento} onChange={handleChange} />
                                          </div>
                                          <div className="inf">
                                                <label >Tipo de Usuario</label>
                                                <input type="text" placeholder="Ingrese su rol" name="tipouser" className='inputsRegistro' value={data.tipouser} onChange={handleChange} />
                                          </div>
                                    </div>
                                    <div className="corre">
                                          <div className="inf">
                                                <label >Email</label>
                                                <input type="email" name="email" placeholder="correo..." className='inputsRegistro' value={data.email} onChange={handleChange} />
                                          </div>
                                          <div className="inf">
                                                <label >Teléfono de contacto</label>
                                                <input type="text" name="telefono" placeholder="teléfono..." className='inputsRegistro' value={data.telefono} onChange={handleChange} />
                                          </div>

                                    </div>
                                    <div className="orig">
                                          <div className="inf">
                                                <label>Pais de origen</label>
                                                <select name="paisorigen" className="Pais-origen" onChange={handleChange}>
                                                      <option>Escoja una opción</option>
                                                      <option value="Venezuela">Venezuela</option>
                                                      <option value="Colombia">Colombia</option>
                                                      <option value="Otro">Otro</option>
                                                </select>
                                          </div>
                                          <div className="inf">
                                                <label >Foto</label>
                                                <input type="file" name="img" placeholder="selecionar archivo" className='inputsRegistro' value={data.img} onChange={handleChange} />
                                          </div>
                                    </div>
                                    <div className="contraRegi">
                                          <div className="inf">
                                                <label>Contraseña</label>
                                                <input type="password" name="password" className='inputsRegistro' value={data.password} onChange={handleChange} />
                                          </div>
                                          <div className="inf">
                                                <label for="password2">Confirmar contraseña</label>
                                                <input type="password" name="password2" className='inputsRegistro' />
                                          </div>
                                    </div>
                                    <div className="terminos">
                                          <a href="Terminos.html"><p> <input type="checkbox" className='inputsRegistro' /> Términos y condiciones</p></a>
                                          <button onClick={handleSubmit}>Ingresar</button>
                                          

                                    </div>
                                    <div className='volver'>
                                    <button><Link to='/login'>volver</Link></button>
                                    </div>
                                    
                                   

                              </Form>
                              </Container>
                       </div>
                       </section>
                 
                  </body>
           



      );
}
export default Registro;