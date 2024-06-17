import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    const {valor, actualizarValor, equipos} = props;
        
    const manejarCambio = (e) =>{
        actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label >Equipos</label>
        <select value={valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo:</option>
            {equipos.map((equipo, index) => {
               return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;