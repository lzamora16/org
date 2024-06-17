import { useState } from "react";
import {v4 as uuid} from 'uuid';
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const {equipos, registrarColaborador, registrarEquipo} = props;

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault();

        let datosEnviar = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registrarColaborador(datosEnviar);
    }

    const manejarRegistroEquipo = (e) => {
        e.preventDefault();

        let datosEquipos = {
            id: uuid(),
            titulo,
            colorPrimario: color
        }

        registrarEquipo(datosEquipos)
    }

    return <section className="formulario">
        <form onSubmit={manejarSubmit}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese su nombre..." 
                required 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese su puesto..." 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingrese enlace de fotografía..." 
                required 
                valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={equipos}
            />
            <Boton texto="Crear" />
        </form>

        <form onSubmit={manejarRegistroEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese el título..." 
                required 
                valor={titulo} 
                actualizarValor={setTitulo}
            />
            <Campo 
                titulo="Color Primario" 
                placeholder="Ingrese el color Hex..." 
                required 
                valor={color} 
                actualizarValor={setColor}
                type="color"
            />
            <Boton texto="Registrar Equipo" />
        </form>
    </section>
}

export default Formulario;