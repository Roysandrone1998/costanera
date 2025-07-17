import { useState } from 'react';
import Contacto from './Contacto';
import '../css/TresC.css';

function VinosDeRio() {
    const [mostrarProductos, setMostrarProductos] = useState(false);
    const [mostrarProyectos, setMostrarProyectos] = useState(false);

    const toggleProductos = () => {
        setMostrarProductos(prev => !prev);
    };

    const toggleProyectos = () => {
        setMostrarProyectos(prev => !prev);
    };

    return (
        <section>
            {/* HERO PRINCIPAL */}
            <div className="parana-turismo-section py-5">
                <div className="hero-parana text-center">
                    <img src="/img/openclub-logo.png" alt="Open Club" />
                    <h1>Moto TUR</h1>
                    <button>¡Visita nuestra web!</button>
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

            {/* PROYECTOS */}
            <div className="container my-5 px-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div
                            className="d-flex align-items-center mb-4 cursor-pointer"
                            onClick={toggleProyectos}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="yellow-dot me-3"></div>
                            <h2 className="fw-bold mb-0">
                                Proyectos {mostrarProyectos ? '▲' : '▼'}
                            </h2>
                        </div>

                        {mostrarProyectos && (
                            <div className="fade-in">
                                <ul className="list-unstyled">
                                    <li>Congreso de Oftalmología – Hotel & Spa Costanera – Colón, Entre Ríos.</li>
                                    <li>Taller Sudamericano sobre Preservación Ictícola del Río Paraná – Complejo Playas del Thompson – Paraná, Entre Ríos.</li>
                                    <li>Curso de Turismo Termal y Turismo Salud FEGRHA – Hotel Costa del Sol – Federación, Entre Ríos.</li>
                                    <li>Jornadas de Capacitación en Servicios Turísticos Termales – Biblioteca El Ateneo – Córdoba.</li>
                                    <li>Jornada Outdoor – Iglesia Cristo, la solución – Complejo Playas del Thompson – Paraná, Entre Ríos.</li>
                                </ul>
                            </div>
                        )}
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

                                <div className="mb-4">
                                    <h5 className="text-warning fw-bold">⭐ VIAJES DE INCENTIVO</h5>
                                    <p>Tres C diseña viajes de incentivo únicos... con el respaldo de más de 30 años en el sector...</p>
                                </div>

                                <div className="mb-4">
                                    <h5 className="text-warning fw-bold">⭐ TEAM BUILDING – JORNADAS RECREATIVAS</h5>
                                    <p>Jornadas recreativas para organizaciones... respaldo por nuestra experiencia...</p>
                                </div>

                                <div className="mb-4">
                                    <h5 className="text-warning fw-bold">⭐ ORGANIZACIÓN DE EVENTOS ESPECIALES</h5>
                                    <p>Diseño, logística y producción integral... adaptados a cada cliente.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Contacto/>
        </section>
    );
}

export default VinosDeRio;