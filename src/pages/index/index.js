import Banner from '../../components/banner/Banner';
import Descripcion from '../../components/descripcion/Descripcion';
import Feature from '../../components/feature/Feature';
import Nav from '../../components/nav/Nav';
import Ubicanos from '../../components/ubicanos/Ubicanos';
import Opiniones from '../../components/opiniones/Opiniones';
import Footer from '../../components/footer/Footer';

function index(){
  return(
    <div className="container">
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