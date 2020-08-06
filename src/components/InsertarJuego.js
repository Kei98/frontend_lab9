import React, { Component } from "react";
import "./InsertarJuego.scss";

//Incompleto
class InsertarJuegoJuego extends Component{
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
                this.setState({juegos});
            })
    }

    render() {
        const { juegos } = this.state;
        return (
            <div className="listaJuegos">
                <ol>
                    { juegos.map(
                        juego =>
                            <li key={juego.id}>
                                <a href="">{juego.nombre}</a>
                            </li>)
                    }
                </ol>
            </div>
        );
    }

}

export default Juego;