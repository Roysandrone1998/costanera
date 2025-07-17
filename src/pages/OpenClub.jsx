import { useState } from 'react';
import '../css/TresC.css';
import Contacto from './Contacto';
function OpenClub() {
const [mostrarProductos, setMostrarProductos] = useState(false);
    const toggleProductos = () => setMostrarProductos(prev => !prev);

const [mostrarAntecedentes, setMostrarAntecedentes] = useState(false);

const toggleAntecedentes = () => {
    setMostrarAntecedentes(prev => !prev);
};
    return (
        <section className="openclub-section">
        {/* HERO principal con logo y título */}
        <div className="hero-parana text-center bg-light py-5 mb-5">
            <img src="/img/openclub-logo.png" alt="Open Club" className="openclub-logo mb-3" />
            <h1 className="display-4 fw-bold">
            OPEN <span className="text-primary">CLUB</span>
            </h1>
            <button className="openclub-button mt-3">¡Visita nuestra web!</button>
        </div>

        {/* GALERÍA de imágenes */}
        <div
            style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 200px)",
            gap: "1rem",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px"
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

        {/* INFRAESTRUCTURA */}
        <div className="container my-5">
            <div className="text-center">
            <div className="yellow-dot mx-auto mb-2"></div>
            <h2 className="fw-bold">NUESTRA INFRAESTRUCTURA INCLUYE</h2>
            <p className="text-muted">
                Diversas opciones de alojamiento, adaptadas a familias, grupos y delegaciones.
            </p>
            </div>

            <div className="row bg-light py-4 px-3 rounded-4">
            <div className="col-md-6">
                <ul className="list-unstyled">
                <li className="mb-3"><strong>⭐ PISCINAS RECREATIVAS:</strong> Tanto para adultos como para niños.</li>
                <li className="mb-3"><strong>⭐ RESTÓ-BAR:</strong> Con gastronomía local.</li>
                <li className="mb-3"><strong>⭐ SALONES EQUIPADOS:</strong> Para eventos diversos.</li>
                <li className="mb-3"><strong>⭐ VINOTECA:</strong> Especializada en vinos entrerrianos.</li>
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="list-unstyled">
                <li className="mb-3"><strong>⭐ CANCHAS DE PÁDEL:</strong> Para adultos y niños.</li>
                <li className="mb-3"><strong>⭐ GLAMPING URBANO:</strong> Con servicio distintivo.</li>
                <li className="mb-3"><strong>⭐ CAMPER PARK:</strong> Para motorhomes de categoría.</li>
                </ul>
            </div>
            </div>
        </div>
{/* ENCABEZADO PRODUCTOS CON TOGGLE */}
<div className="container my-5 px-4">
    <div className="row justify-content-center">
        <div
        className="col-md-12 d-flex align-items-center mb-4 cursor-pointer"
        onClick={toggleProductos}
        style={{ cursor: 'pointer' }}
        >
        <div className="yellow-decor me-3"></div>
        <h2 className="fw-bold mb-0">
            PRODUCTOS {mostrarProductos ? '▲' : '▼'}
        </h2>
        </div>
    </div>

    {mostrarProductos && (
        <div className="row align-items-start fade-in">
        {/* Columna de texto */}
        <div className="col-md-6">
            <div className="custom-box bg-white shadow-sm p-4 rounded-4">
            <h5 className="fw-bold">ALOJAMIENTO</h5>
            <ul>
                <li>Monoambientes</li>
                <li>Dúplex</li>
                <li>La Casa del Open</li>
                <li>The Box</li>
                <li>Glamping Urbano</li>
                <li>Camper Park</li>
            </ul>

            <h5 className="text-warning fw-bold">⭐ EVENTOS</h5>
            <p>Ofrecemos excelentes instalaciones e infraestructura para realizar tu evento...</p>

            <h5 className="text-warning fw-bold">⭐ VINOTECA</h5>
            <p>Vinos de Ríos es la primera y única vinoteca dedicada 100% a etiquetas entrerrianas...</p>

            <h5 className="text-warning fw-bold">⭐ AGENCIA DE VIAJES</h5>
            <p>En nuestro complejo se encuentra ubicada la oficina de Costanera 241 Viajes y Turismo...</p>

            <h5 className="text-warning fw-bold">⭐ TEMPORADA DE VERANO</h5>
            <p>Brindamos la posibilidad de disfrutar de Open Club a través de nuestro pase por el día...</p>
            </div>
        </div>

        {/* Columna de imágenes */}
        <div className="col-md-6">
            <img src="/img/foto1.jpg" alt="Open Club" className="img-productos mb-4" />
            <img src="/img/foto2.jpg" alt="Piscina" className="img-productos" />
        </div>
        </div>
    )}
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

export default OpenClub;