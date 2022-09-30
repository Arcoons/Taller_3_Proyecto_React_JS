import "./Banner.css";
import imagen from "./slide1.jpg"
function Banner(){
    return(
        <section className="slider">
        <div className="contenido">
            <img src={imagen} alt=""/>
                  <div id="textosl">
                        <p>Lorem ipsum dolor sir ameteliter,
                              consectetur adipiscing elit.
                         </p>
                  </div> 
            </div>  
            </section>
    );
}

export default Banner;