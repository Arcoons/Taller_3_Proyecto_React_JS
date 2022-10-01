import Banner from '../../Components/banner/Banner';
import Descripcion from '../../Components/descripcion/Descripcion';
import Feature from '../../Components/feature/Feature';
import Nav from '../../Components/nav/Nav';
import Ubicanos from '../../Components/ubicanos/Ubicanos';
import Opiniones from '../../Components/opiniones/Opiniones';
import Footer from '../../Components/footer/Footer'

function index(){
  return(
    <div>
    <Nav/>
    <Banner/>
    <Descripcion/>
    <Feature/>
    <Ubicanos/>
    <Opiniones/>
    <Footer/>
  </div>
  );
}

export default index;