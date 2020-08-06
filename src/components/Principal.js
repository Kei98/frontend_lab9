import React, { Component } from "react";
import axios from "axios";
import "./Principal.scss";

class Juego extends Component{
    constructor() {
        super();
        this.state = {
            juegos: []
        }
    }

    componentDidMount() {
        axios.get("http://laboratorio9.test/api/juegos")
            .then(response => {
                const juegos = response.data;
                this.setState({ juegos });
            })
    }

    render() {
        const { juegos } = this.state;
        return (
          <div className="listaJuegos">
              <a href="/insertar">Insertar</a>
              <ol>
                  { juegos.map(
                      juego =>
                          <li key={juego.id}>
                              {/*<Link >*/}
                              {/*    */}
                              {/*</Link>*/}
                              <a href="">{juego.nombre}</a>
                          </li>)
                  }
              </ol>
          </div>
        );
    }

}

export default Juego;