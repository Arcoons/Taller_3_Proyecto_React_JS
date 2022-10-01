import "./Card-feature.css";

function CardFeature({ texto, clase, icono }) {
      return (

            <div className={clase}>
                  <i className={icono}></i>
                  <p>{texto}</p>
            </div>
      )
}
export default CardFeature;