import React from 'react';
import Contacto from './Contacto';
import '../css/Home.css';

const Card = ({ img, title }) => (
    <div className="home-card">
        <img src={img} className="home-card-img" alt={title} />
        <div className="home-card-body">
        <h5 className="home-card-title">{title}</h5>
        </div>
    </div>
    );

    function Home() {
    return (
        <section className="home-section">
        {/* HERO principal */}
        <div className="hero-parana">
            <img src="/img/openclub-logo.png" alt="Open Club" className="openclub-logo" />
            <h1>
            PARANÁ <span>TURÍO</span>
            </h1>
            <button className="openclub-button">¡Visita nuestra web!</button>
        </div>

        {/* Carrusel */}
        <div className="home-carousel carousel slide" id="cardCarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="home-carousel-track">
                <Card img="/img/foto1.jpg" title="TURISMO MICE" />
                <Card img="/img/foto2.jpg" title="TURISMO NAUTICO" />
                <Card img="/img/foto3.jpg" title="COMPLEJO TURÍSTICO" />
                </div>
            </div>
            <div className="carousel-item">
                <div className="home-carousel-track">
                <Card img="/img/foto4.jpg" title="ENOTURISMO" />
                <Card img="/img/foto3.jpg" title="EVENTOS" />
                <Card img="/img/foto2.jpg" title="VIAJES EDUCATIVOS" />
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
            </button>
        </div>

        {/* ¿QUIÉNES SOMOS? */}
        <section className="home-quienes-somos">
            <div className="home-quienes-wrapper">
            <div className="home-quienes-title">
                <img src="/img/es.png" alt="Estrella" className="home-estrella" />
                <h2>¿QUIÉNES SOMOS?</h2>
            </div>
            <div className="home-quienes-texto">
                <p>
                Con más de 30 años de trayectoria, Costanera 241 se ha consolidado como la mayor organización de turismo...
                <br /><br />
                Costanera 241 es hoy sinónimo de confianza, innovación y liderazgo en el turismo.
                </p>
                <div className="triangle-decoration"></div>
            </div>
            </div>
        </section>

        {/* VALORES */}
        <section className="home-valores">
            <div className="container px-4">
            <div className="d-flex align-items-center mb-4 justify-content-center justify-content-md-start">
                <div className="yellow-dot me-3"></div>
                <h2 className="fw-bold mb-0">CREEMOS EN NUESTROS VALORES!</h2>
            </div>

            <div className="row gy-4 mb-5">
                {/* Valores por columna */}
            </div>
            </div>
        </section>

        {/* MEMBRESÍAS */}
        <section className="home-membresias text-center">
            <div className="yellow-dot mx-auto mb-2"></div>
            <h3 className="fw-bold">MEMBRESÍAS</h3>
            <p className="text-muted mb-4">
            Nuestra labor está respaldada por las principales instituciones del turismo en Argentina:
            </p>
            <p><span className="text-warning">⭐</span> <strong>FAEVYT</strong><br />Federación Argentina de Asociaciones de Empresas de Viajes y Turismo</p>
            <p><span className="text-warning">⭐</span> <strong>FEHGRA</strong><br />Federación Empresaria Hotelera Gastronómica de la República Argentina</p>
            <p><strong>AOCA</strong><br />Asociación Argentina de Organizadores y Proveedores de Exposiciones, Congresos, Eventos y Burós de Convenciones</p>
        </section>
 {/* Logos institucionales */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Costanera 🌞</h2>
                    <p className="text-muted fst-italic">"LA MAYOR ORGANIZACIÓN DE TURISMO EN LA REGIÓN"</p>
                    <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                        <img src="/img/logo1.png" alt="Logo 1" height="40" />
                        <img src="/img/logo2.png" alt="Logo 2" height="40" />
                        <img src="/img/logo3.png" alt="Logo 3" height="40" />
                        {/* Agregá los logos que necesites */}
                    </div>
                </div>
        <Contacto />
        </section>
    );
}

export default Home;
