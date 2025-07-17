
import { useState } from 'react';
import Contacto from './Contacto';
import '../css/TresC.css';
function Representaciones() {



    const [mostrarProductos, setMostrarProductos] = useState(false);


    const toggleProductos = () => {
        setMostrarProductos(prev => !prev);
    };

    return (
        <section>
            {/* HERO PRINCIPAL */}
            <div className="parana-turismo-section py-5">
                <div className="hero-parana text-center bg-light py-5 mb-5">
            <img src="/img/openclub-logo.png" alt="Open Club" className="openclub-logo mb-3" />
            <h1 className="display-4 fw-bold">
            TURISMO<span className="text-primary">EDUCATIVO</span>
            </h1>
            <button className="openclub-button mt-3">¡Visita nuestra web!</button>
        </div>

        {/* QUIÉNES SOMOS - DISEÑO ALINEADO */}
<div className="container my-5 px-4">
    <div className="row justify-content-center align-items-center">
        <div className="col-md-4 mb-4 mb-md-0 d-flex align-items-center">
            <div className="d-flex align-items-center">
                <div className="yellow-dot me-3"></div>
                <h2 className="fw-bold mb-0">¿QUIÉNES<br />SOMOS?</h2>
            </div>
        </div>
        <div className="col-md-8">
            <div className="custom-box position-relative bg-white shadow-sm p-4 rounded-4">
                <p className="text-muted mb-0">
                    Paraná Tu Río es la única propuesta de travesías náuticas en la región que pone en valor el río Paraná y su entorno natural como escenario central de experiencias turísticas auténticas. Con el respaldo de años de trayectoria en el sector y un equipo altamente capacitado, ofrecemos servicios de calidad que combinan navegación, gastronomía con identidad y contacto directo con la cultura ribereña.
                    <br /><br />
                    Diseñamos cada experiencia con compromiso y pasión por mostrar lo mejor de nuestro litoral.
                </p>
                <div className="corner-gradient"></div>
            </div>
        </div>
    </div>
</div>
</div>

{/* REPRESENTACIONES - DISEÑO ESTILO CARDS */}
<div className="container my-5 px-4">
    <div className="d-flex align-items-center mb-4 cursor-pointer" onClick={toggleProductos} style={{ cursor: 'pointer' }}>
        <div className="yellow-dot me-3"></div>
        <h2 className="fw-bold mb-0">REPRESENTACIONES {mostrarProductos ? '▲' : '▼'}</h2>
    </div>

    {mostrarProductos && (
        <div className="fade-in">
            <div className="row gy-4">

            {/* Card 1 */}
            <div className="col-md-8">
                <div className="represent-card position-relative shadow-sm p-4 rounded-4 bg-white">
                <h5 className="fw-bold">
                    <span className="estrella-yellow">⭐</span> TEMAIKÉN – FUNDACIÓN EDUCATIVA Y BIOPARQUE
                </h5>
                <p className="text-muted mb-0">
                    Somos representantes oficiales de Temaikén, una institución líder en conservación, educación ambiental y bienestar animal. A través de esta representación, acercamos a instituciones educativas, empresas de viajes y turismo y grupos turísticos la posibilidad de vivir experiencias significativas en el bioparque más importante de Argentina.
                </p>
                <div className="corner-yellow"></div>
                </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src="/img/foto1.jpg" className="img-fluid rounded-4 border border-2 border-warning" alt="Temaikén" />
            </div>

            {/* Card 2 */}
            <div className="col-md-8">
                <div className="represent-card position-relative shadow-sm p-4 rounded-4 bg-white">
                <h5 className="fw-bold">
                    <span className="estrella-yellow">⭐</span> OPEN CLUB – COMPLEJO TURÍSTICO EN PARANÁ
                </h5>
                <p className="text-muted mb-0">
                    Representamos también al Complejo Turístico Open Club, un espacio innovador ubicado en la ciudad de Paraná, diseñado para brindar servicios de alojamiento, recreación, turismo deportivo y educativo, eventos y propuestas de bienestar. Un entorno ideal para contingentes, delegaciones, familias y turistas que buscan experiencias integrales.
                </p>
                <div className="corner-yellow"></div>
                </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src="/img/foto2.jpg" className="img-fluid rounded-4 border border-2 border-warning" alt="Open Club" />
            </div>

            {/* Card 3 */}
            <div className="col-md-8">
                <div className="represent-card position-relative shadow-sm p-4 rounded-4 bg-white">
                <h5 className="fw-bold">
                    <span className="estrella-yellow">⭐</span> ISLOTE CURUPÍ – RESERVA NATURAL PROTEGIDA
                </h5>
                <p className="text-muted mb-0">
                    Comercializamos la propuesta de turismo del Islote Curupí, una reserva natural protegida colaborando así con la agrupación Nandarej Andajereí y con el trabajo que llevan a cabo cuidando y enseñando sobre la importancia que tiene el cuidado del medio ambiente. El Islote Curupí brinda un entorno privilegiado para vivir experiencias de contacto directo con la naturaleza de las islas del litoral, ideal para visitas educativas, avistaje de aves y actividades de sensibilización ambiental.
                </p>
                <div className="corner-yellow"></div>
                </div>
            </div>
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src="/img/foto3.jpg" className="img-fluid rounded-4 border border-2 border-warning" alt="Islote Curupí" />
            </div>

            </div>
        </div>
)}
</div>
            <Contacto />
        </section>
    );
}


    export default Representaciones;