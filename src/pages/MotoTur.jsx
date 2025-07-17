import { useState } from 'react';
import Contacto from './Contacto';
import '../css/TresC.css';

function MotoTur() {
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
            MOTO<span className="text-primary">TUR</span>
            </h1>
            <button className="openclub-button mt-3">¡Visita nuestra web!</button>
        </div>

                {/* GALERÍA GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridTemplateRows: "repeat(3, 200px)",
                        gap: "1rem",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 15px",
                    }}
                    className="my-5"
                >
                    <img src="/img/foto1.jpg" alt="foto1" style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "1", gridRow: "1" }} />
                    <img src="/img/foto2.jpg" alt="foto2" style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "2", gridRow: "1" }} />
                    <img src="/img/foto3.jpg" alt="foto3" style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "3", gridRow: "1" }} />
                    <img src="/img/foto4.jpg" alt="foto4" style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "4", gridRow: "1 / span 3" }} />
                    <img src="/img/foto5.jpg" alt="foto5" style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "1 / span 3", gridRow: "2 / span 2" }} />
                </div>
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


            {/* PRODUCTOS */}
            <div className="container my-5 px-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div
                            className="d-flex align-items-center mb-4 cursor-pointer"
                            onClick={toggleProductos}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="yellow-dot me-3"></div>
                            <h2 className="fw-bold mb-0">
                                PRODUCTOS {mostrarProductos ? '▲' : '▼'}
                            </h2>
                        </div>

                        {mostrarProductos && (
                            <div className="fade-in">
                                <p><strong>Tres C</strong> actúa como <strong>DMC (Destination Management Company)</strong>, ofreciendo la organización integral de congresos y convenciones llave en mano...</p>

                                <div className="mb-4">
                                    <h5 className="text-warning fw-bold">⭐ TURISMO CORPORATIVO</h5>
                                    <p>Ofrecemos soluciones integrales... <br /><strong>Somos una empresa líder en turismo receptivo en la región con más de 30 años de experiencia.</strong></p>
                                </div>

                                <div className="mb-4">
                                    <h5 className="text-warning fw-bold">⭐ CONSULTORÍAS Y MENTORÍAS</h5>
                                    <p>Brindamos consultorías y mentorías... <br />Trabajamos a medida de cada proyecto, aportando visión estratégica...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Contacto />
        </section>
    );
}

export default MotoTur;