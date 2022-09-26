import './Registro.css'
import Logoblanco from './Hotelia horizontal blanco.svg'

function registro(){
    return(
      <section id="container-grid">
            <div className="logo">
                <div className="img">
                  <img src={Logoblanco} />
                  <div className="bienvenido"><p>Eres más que bienvenido</p></div>
                  <div className="text"><p>un lugar en tu corazó<nav></nav></p></div>
            </div>
            </div>
        <div className="formulario">
                  <div className="tittle"><h1>Regístrate</h1></div>
                <div className="form">
                  <div className="doc">
                        <div id="inf">
                              <label for="tip-doc">Tipo de documento</label>
                             <select name="tip-doc" id="tip-doc">
                              <option value="0">Escoja una opción</option>
                              <option value="1">Cédula</option>
                              <option value="2">Tarjeta de identidad</option>
                              <option value="3">Otro</option>
                        </select>
                        </div>
                        <div id="inf">
                              <label for="num-doc">Número documento</label>
                              <input type="text" name="num-doc" placeholder="10000000" />
                        </div> 
                  </div>
                  <div className="nom">
                        <div id="inf">
                              <label for="nombres">Nombres</label>
                              <input type="text" name="nombres" placeholder="Nombres..." />
                        </div>
                        <div id="inf">
                              <label for="Apellidos">Apellidos</label>
                              <input type="text" name="Apellidos" placeholder="Apellidos..." />
                        </div> 
                  </div>
                  <div className="dat">
                        <div id="inf">
                              <label for="FecNac">Fecha de nacimiento</label>
                              <input type="date" name="FecNac" />
                        </div>
                        <div id="inf">
                              <div className="radio">
                              <label for="fecha">Género</label>
                              <input type="radio" name="genero" />Mujer
                              <input type="radio" name="genero" />Hombre
                              <input type="radio" name="genero" />Otro
                              </div>
                        </div> 
                  </div>
                  <div className="corre">
                        <div id="inf">
                              <label for="Email">Email</label>
                              <input type="email" name="Email" placeholder="correo..." />
                        </div>
                        <div id="inf">
                              <label for="tel">Teléfono de contacto</label>
                              <input type="text" name="tel" placeholder="teléfono..." />
                        </div> 
                  </div>
                  <div className="orig">
                        <div id="inf">
                              <label for="país">País deorigen</label>
                              <select name="país" id="país">
                                    <option value="1">option1</option>
                                    <option value="2">option2</option>
                                    <option value="3">option3</option>
                                    <option value="4">option4</option>
                                    <option value="5">option5</option>
                              </select>
                        </div>
                        <div id="inf">
                              <label for="photo">Foto</label>
                              <input type="text" name="photo" placeholder="selecionar archivo" />
                        </div> 
                  </div>
                  <div className="contra">
                        <div id="inf">
                              <label for="password">Contraseña</label>
                              <input type="password" name="password" />
                        </div>
                        <div id="inf">
                              <label for="password2">Confirmar contraseña</label>
                              <input type="password2" name="password2" />
                        </div> 
                    </div>
                
                <div className="terminos">
                  <a href="Terminos.html"><p> <input type="checkbox" /> Términos y condiciones</p></a>
                  <a href="login.html"><button>Ingresar</button></a>
                </div>
                
            </div>
        </div>
                

                
            
        </section> 
    );
}
export default registro;