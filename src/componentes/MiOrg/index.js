import "./MiOrg.css";

const MiOrg = (props) => {

    const {cambiarMostrar} = props;

    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="Add" onClick={cambiarMostrar}/>
    </section>
}

export default MiOrg;