import "./Opiniones.css"

function Opiniones({imagen,nombre,reseña}) {
    return (
        <section className="opiniones">
            <div className="titulo"><h1>Nuestros usuarios dicen...</h1></div>
            <div className="carrusel">   
                        <div id="op" >
                              <div className="enc">
                              <img src={imagen} alt=""/>
                              <div className="estrellas">
                                    <h5>{nombre}</h5>
                                    <div>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-regular fa-star"></i>
                                          </div>
                              </div>
                              </div>
                              <div className="ip">
                                    <p>{reseña}</p>
                              </div>
                        </div>
                        <div id="op">
                              <div className="enc">
                                    <img src={imagen} alt=""/>
                                    <div className="estrellas">
                                          <h5>{nombre}</h5>
                                          <div>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-solid fa-star"></i>
                                          <i className="fa-regular fa-star"></i>
                                          </div>
                                          
                                    </div>
                  
                                    </div>
                                    <div className="ip">
                                          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                                                Elit quis enim ultricies ullamcorper.
                                                Nunc aenean auctor vel diam dictum.
                                          </p>
                                    </div>
                        </div>
                        <div id="op">
                              <div className="enc">
                                    <img src={imagen} alt=""/>
                                    <div className="estrellas">
                                          <h5>Diego rodriguez</h5>
                                          <div>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                </div>
                                    </div>
                                    
                                    </div>
                                    <div className="ip">
                                          <p>Lorem ipsum dolor sit amet, consectet adipiscing elit.
                                                Elit quis enim ultricies ullamcorper.
                                                Nunc aenean auctor vel diam dictum.
                                          </p>
                                    </div>
                        </div>
            </div>

      </section>
    );
}

export default Opiniones;