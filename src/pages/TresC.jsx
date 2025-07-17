import { useState } from 'react';
import '../css/TresC.css';
import Contacto from './Contacto';

function TresC() {
    const [mostrarObjetivos, setMostrarObjetivos] = useState(false);

    const toggleObjetivos = () => {
        setMostrarObjetivos(prev => !prev);
    };
const [mostrarAntecedentes, setMostrarAntecedentes] = useState(false);

const toggleAntecedentes = () => {
    setMostrarAntecedentes(prev => !prev);
};
    const [mostrarProductos, setMostrarProductos] = useState(false);

const toggleProductos = () => {
    setMostrarProductos(prev => !prev);
};

    return (
        <section className="parana-turismo-section py-5">
            {/* HERO PRINCIPAL */}
            <div className="hero-parana text-center">
                <img src="/img/openclub-logo.png" alt="Open Club" />
                <h1>TRES C</h1>
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

            {/* OBJETIVOS - CON TOGGLE */}
            <div className="container my-5 px-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div
                            className="d-flex align-items-center mb-4 cursor-pointer"
                            onClick={toggleObjetivos}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src="/img/star-yellow.svg" alt="decoración" className="objetivos-deco" />
                            <h2 className="fw-bold mb-0">
                                OBJETIVOS {mostrarObjetivos ? '▲' : '▼'}
                            </h2>
                        </div>

                        {mostrarObjetivos && (
                            <div className="row align-items-center fade-in">
                                <div className="col-md-6">
                                    <div className="custom-box position-relative bg-white shadow-sm p-4 rounded-4">
                                        <p><strong>Asegurar la satisfacción plena de nuestros clientes</strong><br />
                                            Brindar soluciones personalizadas que se adapten...
                                        </p>
                                        <p><strong>Consolidar el liderazgo en el Turismo de Reuniones</strong><br />
                                            Consolidarnos como la DMC de referencia...
                                        </p>
                                        <p><strong>Apostar a la innovación y trabajo en equipo</strong><br />
                                            Desarrollar estrategias innovadoras...
                                        </p>
                                        <div className="corner-gradient"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="/img/objetivos-img.jpg"
                                        alt="Objetivos Costanera"
                                        className="decorated-img"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* MISIÓN Y VISIÓN */}
            <div className="container my-5 px-4">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="mision-vision-box">
                                    <h5 className="fw-bold">MISIÓN</h5>
                                    <p className="text-muted">Asesoramos y trabajamos...</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mision-vision-box">
                                    <h5 className="fw-bold">VISIÓN</h5>
                                    <p className="text-muted">El Turismo de Reuniones es un segmento clave...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PRODUCTOS - CON TOGGLE */}
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
                    
                    <ul className="mb-4">
                        <li>Know-how</li>
                        <li>Personal idóneo</li>
                        <li>Infraestructura y logística propias</li>
                        <li>Departamento de comunicación gráfica</li>
                        <li>Reservas hoteleras</li>
                        <li>Confirmaciones, venta y emisión de tickets aéreos</li>
                        <li>Departamento de turismo receptivo</li>
                        <li>Amplia gama de productos y excursiones propias</li>
                        <li>Programas y post congresos para participantes y acompañantes</li>
                    </ul>

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

{/* ANTECEDENTES - CON TOGGLE */}
<div className="container my-5 px-4">
    <div className="row justify-content-center">
        <div className="col-md-10">
            <div
                className="d-flex align-items-center mb-4 cursor-pointer"
                onClick={toggleAntecedentes}
                style={{ cursor: 'pointer' }}
            >
                <div className="yellow-dot me-3"></div>
                <h2 className="fw-bold mb-0">
                    ANTECEDENTES {mostrarAntecedentes ? '▲' : '▼'}
                </h2>
            </div>

            {mostrarAntecedentes && (
                <div className="fade-in">
                    <p><strong>A continuación, algunos de los últimos eventos que hemos realizado:</strong></p>
                    <ul className="list-unstyled">
                        <li>Congreso de Oftalmología – Hotel & Spa Costanera – Colón, Entre Ríos.</li>
                        <li>Taller Sudamericano sobre Preservación Ictícola del Río Paraná – Complejo Playas del Thompson – Paraná, Entre Ríos.</li>
                        <li>Curso de Turismo Termal y Turismo Salud FEGRHA – Hotel Costa del Sol – Federación, Entre Ríos.</li>
                        <li>Jornadas de Capacitación en Servicios Turísticos Termales – Biblioteca El Ateneo – Córdoba.</li>
                        <li>Asamblea del Consejo Federal de Escribanos – Colegio de Escribanos – Paraná, Entre Ríos.</li>
                        <li>Encuentro Latinoamericano de Salud Bucal, Hotel & Casino Mayorazgo – Paraná, Entre Ríos.</li>
                        <li>Congreso FASGO, Colegio de Escribanos – Paraná, Entre Ríos.</li>
                        <li>Congreso de Pastizales, Hotel & Casino Mayorazgo – Paraná, Entre Ríos.</li>
                        <li>Congreso Nacional de SIDA, Colegio de Escribanos – Paraná, Entre Ríos.</li>
                        <li>Congreso Sudamericano de Corredores Públicos Inmobiliarios, Teatro 3 de Febrero – Paraná, Entre Ríos.</li>
                        <li>Educaal 2008, Facultad de Ciencias Económicas UNER – Paraná, Entre Ríos.</li>
                        <li>CITUL 2008, Hotel Marán Suites & Towers – Paraná, Entre Ríos.</li>
                        <li>Jornadas de Capacitación – Grupo HSBC – Hotel Howard Johnson Plaza & Resort – Paraná.</li>
                        <li>XV° Seminario Nacional de Tesorerías Generales – Facultad de Ciencias Económicas UNER – Paraná, Entre Ríos.</li>
                        <li>Jornada para Novo Nordisk Pharma Argentina – Complejo Playas del Thompson – Paraná, Entre Ríos.</li>
                        <li>XVIII° Olimpiadas Farmacéuticas Nacionales 2012 – Paraná, Entre Ríos.</li>
                        <li>Jornadas Team Building Autocrédito – Howard Johnson Plaza & Resort – Paraná, Entre Ríos.</li>
                        <li>Jornada Team Building Danone – Howard Johnson Plaza & Resort – Paraná, Entre Ríos.</li>
                        <li>Jornada Team Building – Pro Energy Services – Paraná, Entre Ríos.</li>
                        <li>Jornada Team Building – Securitas – Paraná, Entre Ríos.</li>
                        <li>Minitravesía en kayak – Nestlé – Paraná, Entre Ríos.</li>
                        <li>Jornada Team Building – CNC – Paraná, Entre Ríos.</li>
                        <li>Jornadas para CREDIMACO – Complejo Playas del Thompson – Paraná, Entre Ríos.</li>
                        <li>Jornada Team Building – Temis Lostaló – Día de Campo – Paraná, Entre Ríos.</li>
                        <li>Jornada Outdoor – Iglesia Cristo, la solución – Complejo Playas del Thompson – Paraná, Entre Ríos.</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
</div>

<Contacto/>
        </section>
    );
}

export default TresC;