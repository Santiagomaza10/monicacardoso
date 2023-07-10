import "./App.css";
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/navbar";
import Card1 from "./components/card1/card1";
import Card2 from "./components/card2/card2";
import img from "./assets/img/img.jsx";
import Novedades from "./components/novedades/novedades";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card1
        title="Desarrollos inmobiliarios"
        subtitle="Estructuramos, desarrollamos y gerenciamos proyectos inmobiliarios de gran escala."
        text="Con 3 generaciones en el mercado inmobiliario y de la construccion, nos dedicamos al desarrollo de negocios inmobiliarios de gran escala, cubriendo todas las aristas del negocio. Todos los negocios que realizamos, los hacemos con la confianza de estar trabajando en ubicaciones privilegiadas, desarrollando productos de gran valor, llevados a cabo por un equipo de profesionales de primer nivel."
        img={img.card1}
      />
<Novedades/>
    </div>
  );
}

export default App;

