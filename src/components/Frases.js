import React from "react";
import Card from "react-bootstrap/Card";

//si quiero importar varios componentes de la misma librería (react-bootstrap) puedo hacer el import así: import {Card , Button} from 'react-bootstrap' (pongo entre llaves y separados por comas los componentes) y en el from borro las barras invertidas que indican el nombre del componente y sólo pongo la librería

const Frases = (props) => {
  return (
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
              {/*ahora reemplazo las variables (imagen, personaje, etc) por {props.nombredelprops.variable (imagen, personaje)}*/}
            <img src={props.personaje.image} alt="" />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>{props.personaje.character}</Card.Title>
            <Card.Text>
              {props.personaje.quote}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frases;
