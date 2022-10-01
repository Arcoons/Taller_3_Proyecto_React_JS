import Cards from './cards'
import "./Opiniones.css"

function Opiniones() {
      return (
            <section className="opiniones">
                  <div class="titulo"><h1>Nuestros usuarios dicen...</h1></div>
                  <div class="carrusel">   
                  <Cards
                  imagen={'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg'}
                  icono="fa-solid fa-star"
                  icono2="fa-regular fa-star"
                  nombre="Diego Rodriguez"
                  reseña="Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum."/>
                  <Cards
                  imagen={'https://github.com/Arcoons/taller_0/blob/main/img/p2.jpeg?raw=true'}
                  icono="fa-solid fa-star"
                  icono2="fa-regular fa-star"
                  nombre="Diana Garcia"
                  reseña="Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum."/>
                  <Cards
                  imagen={'https://github.com/Arcoons/taller_0/blob/main/img/p1.jpg?raw=true'}
                  icono="fa-solid fa-star"
                  icono2="fa-regular fa-star"
                  nombre="Esteban Perez"
                  reseña="Lorem ipsum dolor sit amet, consectet adipiscing elit. Elit quis enim ultricies ullamcorper. Nunc aenean auctor vel diam dictum."/>
                  </div>
            </section>
    );
}

export default Opiniones;