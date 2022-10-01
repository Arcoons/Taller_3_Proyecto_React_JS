
function cards({imagen, icono, icono2, nombre, reseña}) {
    return (


        <div id="op" >
            <div className="enc">
                <img src={imagen} alt=""/>
                <div className="estrellas">
                    <h5>{nombre}</h5>
                    <div>
                        <i className={icono}></i>
                        <i className={icono}></i>
                        <i className={icono}></i>
                        <i className={icono}></i>
                        <i className={icono2}></i>
                    </div>
                </div>
            </div>
            <div className="ip">
                <p>{reseña}</p>
            </div>
        </div>
    )
}

export default cards