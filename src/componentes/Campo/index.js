import "./Campo.css";

const Campo = (props) => {
    const {titulo, placeholder, required, valor, actualizarValor, type = 'text'} = props;
    
    const manejarCambio = (e) =>{
        actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{titulo}: </label>
        <input 
            placeholder={placeholder} 
            required={required} 
            value={valor}
            onChange={manejarCambio}
            type={type}
        />
        {/* <span>Mensaje: {valor}</span> */}
    </div>
}

export default Campo;