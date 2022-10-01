import CardFeature from "./Card-feature";
import "./Feature.css";
function Feature(){
    return(
        <section id="features">
            <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
            <div class="features-description">
            <CardFeature
                texto='Reservas'
                clase='feature feature-blue'
                icono='fa-solid fa-bell-concierge'/>
                <CardFeature
                texto='Habitaciones'
                clase='feature feature-black'
                icono='fa-solid fa-bed'/>
                <CardFeature
                texto='Wi-Fi'
                clase='feature feature-blue'
                icono='fa-solid fa-wifi'/>
                <CardFeature
                texto='Gimnasio'
                clase='feature feature-black'
                icono='fa-solid fa-dumbbell'/>
            </div>
        </section>
    );
}

export default Feature;