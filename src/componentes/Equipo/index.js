import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {

    const {id, titulo, colorPrimario, colorSecundario} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    const colorTitulo = {borderColor: colorPrimario};
    const colorFondo = {backgroundColor: colorSecundario}

    return <>
        { 
        colaboradores.length > 0 && 
        <section className="equipo" style={colorFondo}> 
                <input 
                    type="color"
                    className="input-color"
                    value={colorSecundario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value, id);
                    }}
                />
                <h3 style={colorTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;