import "./Footer.css"

function Footer() {
    return (
        <footer class="footer-container">
            <div class="text-footer">
                  <div class="textt">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores, necessitatibus impedit tempora nulla nemo?</p>
                        <div class="redes">
                              <div class="red">
                              <i class="fa-brands fa-instagram"></i>     
                              <i class="fa-brands fa-facebook-f"></i>
                              <i class="fa-brands fa-twitter"></i>                            
                              </div>   
                        </div>
                        <hr class="hr" />
                  </div>
                  <div class="textt2">
                        <div class="icons">
                        <div class="logo-logo">
                               <i class="fa-solid fa-location-dot ti" id="cont"></i><p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p>
                        </div>  
                        <div class="logo-logo" >
                              <i class="fa-solid fa-phone ti" id="cont"></i><p>+57 601 4567899</p>
                        </div>
                        </div>
                        <hr class="hr" />        
                  </div>
                  <div class="textt3">
                        <div>
                              <p>Políticas de privacidad</p>
                        </div>
                        <div id="separador">
                              <p>Políticas de privacidad</p>
                        </div>       
                  </div>
            </div>
      </footer>
    )
}

export default Footer