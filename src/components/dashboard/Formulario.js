import "./formulario.css"

function Formulario() {
      return(
    <section className="datos">
                  <div className="formulario">
                        <div className="tituloFormulario">
                              <h1>Bienvenido Usuario</h1> 
                        </div>
                        <div className="info">
                              <div className="logo-img">
                                    <div className="carga">
                                          <div id="log-des"><i className="fa-solid fa-file-arrow-up"></i></div>
                                          <div id="log1-des"><i className="fa-solid fa-upload"></i></div>
                                    </div>
                                    <button>Cambiar Contraseña</button>
                              </div>
                              <div className="form">
                                    <div className="doc">
                                          <div id="inf">
                                                <label for="tip-doc">Tipo de documento</label>
                                                <input type="text" name="tip-doc" placeholder="CC"/>
                                          </div>
                                          <div id="inf">
                                                <label for="num-doc">Número documento</label>
                                                <input type="text" name="num-doc" placeholder="10000000"/>

                                          </div>
                                          
                                          
                                    </div>
                                    <div className="nom">
                                          <div id="inf">
                                                <label for="nombre">Nombres</label>
                                                <input type="text" name="nombre" placeholder="Nombre.."/>
                                          </div>
                                          <div id="inf">
                                                <label for="Apellido">Apellidos</label>
                                                <input type="text" name="Apellido" placeholder="Apellidos.."/>

                                          </div>
                                    </div>
                                    <div className="origen">

                                          <div id="inf">
                                                <label for="fecha">Fecha nacimiento</label>
                                                <input type="text" name="fecha" placeholder="DD/MM/YY"/>
                                          </div>
                                          <div id="inf">
                                                <label for="origen">País de origen</label>
                                                <input type="text" name="origen" placeholder="País.."/>

                                          </div>
                                    </div>
                                    <div className="genero">
                                          <div id="inf">
                                                <div className="radio">
                                                <label for="fecha">Género</label>
                                                <input type="radio" name="genero"/>Mujer
                                                <input type="radio" name="genero"/>Hombre
                                                <input type="radio" name="genero"/>Otro
                                                </div>
                                          </div>
                                          <div id="inf">
                                                <label for="tel">Teléfono de contacto</label>
                                                <input type="text" name="tel" placeholder="Teléfono"/>

                                          </div>

                                    </div>
                                    <div className="act">
                                          <div className="inf">
                                                <button>Actualizar</button>
                                          </div>

                                    </div>
                                    <div className="contra">
                                          <div id="inf">
                                                <label for="password">Contraseña</label>
                                                <input type="password" name="password"/>
                                          </div>
                                          <div id="inf">
                                                <label for="passwordd">Confirmar contraseña</label>
                                                <input type="password" name="passwordd"/>

                                          </div>

                                    </div>
                                    <div className="cambio">
                                          <div className="inf">
                                                <button>Cambiar</button>
                                          </div>

                                    </div>

                              </div>

                        </div>
                        
                                  
                  </div>
                  
                        
            </section>
      );
}
export default Formulario
