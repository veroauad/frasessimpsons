import "./App.css";

//si o si hay que importar la hoja de estilos de bootstrap. De la siguiente manera:
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frases from "./components/Frases";
import { useState, useEffect } from "react";
import Spiner from "./components/Spiner";

function App() {
  // creo el state para cargar los datos de la API

  const [personaje, setPersonaje] = useState({});

  //creo la variable o state para definir cuando muestro el spiner

  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    //lógica a ejecutar
    consultarApi();
  }, []);

  //función que se encarga de traer los datos de la API

  const consultarApi = async () => {
    //aquí llamo a la variable cargando (para mostrar el spiner mientras tomo los datos de la API)
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    //tengo que indicar que la función es asincrónica para indicarle al código que puede demorarse un poco en tomar los datos de la API. Se pone el código "async" antes de los parámetros de la función más cercana al fetch
    //await es para indicar dónde se tiene que quedar esperando el código hasta obtener los datos de la API (se pone al lado del fetch)
    //siempre async y await van juntas, no se puede escribir una sin la otra

    //creo una constante para guardar los valores o datos obtenidos
    const resultado = await respuesta.json();
    //pongo json porque los datos vienen en ese formato
    //como la variable respuesta tiene la etiqueta await, a esta también se la tengo que indicar (puedo usar await todas las veces que lo necesite)

    console.log(respuesta);
    //si me fijo en la consola después de que se ejecutó el código y me da status:200 significa que está todo bien
    console.log(resultado[0]);
    //me da los datos en la consola en un array
    //indico [0] porque quiero ver el primer objeto del arreglo (esto depende de la API que usemos y cómo nos devuelve los datos (en este caso los devuelve en forma de array))

    //quiero demorar un poco la carga para que se muestre bien el spiner (en caso de que se cargue muy rápido la API y no lo podamos ver)
    setTimeout(() => {
      //ahora tengo que llamar a la función para actualizar el valor del state y que me muestre los datos en el maquetado y no en la consola
      setPersonaje(resultado[0]);
      //aquí llamo la variable cargando y la pongo en false una vez que tomé los datos de la API
      setCargando(false);
    }, 2500);
  };

  //aquí defino que voy a mostrar dependiendo del state cargando
  //operador ternario (condicion) ? (lo que quiero hacer si la condición es verdadera) : (lo que quiero hacer si la condición es falsa)
  //siempre que vea un "?" es un operador ternario

  const mostrarComponente =
    cargando === true ? <Spiner /> : <Frases personaje={personaje} />;

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="Logo de Los Simpson"
          className="w-50"
        />
        {/*process.env nos indica cuál es la ubicación del objeto que voy a adjuntar. La propiedad PUBLIC_URL es por si la quiero subir a un hosting. Con el "+" concateno la imagen*/
        /*nunca se adjunta contenido confidencial en la carpeta public, porque alguien puede llegar (ej fotos personales). Lo que sea muy íntimo se guarda dentro del proyecto en src*/}
        <Button
          variant="warning"
          className="my-5"
          onClick={() => consultarApi()}
        >
          {/*evento onClick para que el botón actualice la frase cada vez que lo apretamos*/}
          Obtener frase
        </Button>
        {/*tengo que importar el botón desde bootstrap para que no se rompa react. (copio el código de importar desde el final de la página de react bootstrap)*/}
      </article>
      {/*<Frases personaje={personaje} />*/}
      {/*le enviamos un props a frases*/}

      {/*llamo a la variable mostrarComponente*/}
      {mostrarComponente}
    </section>
  );
}

export default App;
