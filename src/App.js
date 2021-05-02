import "./App.css";

//si o si hay que importar la hoja de estilos de bootstrap. De la siguiente manera:
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frases from "./components/Frases";

function App() {
  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="Logo de Los Simpson" className = 'w-50'
        />
        {/*process.env nos indica cuál es la ubicación del objeto que voy a adjuntar. La propiedad PUBLIC_URL es por si la quiero subir a un hosting. Con el "+" concateno la imagen*/
        /*nunca se adjunta contenido confidencial en la carpeta public, porque alguien puede llegar (ej fotos personales). Lo que sea muy íntimo se guarda dentro del proyecto en src*/}
        <Button variant="warning" className = 'my-5'>Obtener frase</Button>
        {/*tengo que importar el botón desde bootstrap para que no se rompa react. (copio el código de importar desde el final de la página de react bootstrap)*/}
      </article>
      <Frases/>
    </section>
  );
}

export default App;
