import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3 position-relative">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                {/* Botón hamburguesa */}
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Logo centrado */}
                <Link className="navbar-brand fw-bold logo-centered" to="/">
                    Costanera241
                </Link>

                {/* Barra de búsqueda */}
                <form className="d-flex search-bar">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Buscar..."
                        aria-label="Buscar"
                    />
                </form>
            </div>

            {/* Menú desplegable */}
            {isOpen && (
                <div className="dropdown-menu-custom">
                    {/* Botón cerrar menú */}
                    <button className="close-btn" onClick={toggleMenu}>
                        &times;
                    </button>

                    <ul className="nav flex-column mt-3">
                        {[
                            ["HOME", "/"],
                            ["TRES C", "/TresC"],
                            ["PARANÁ TU RÍO", "/paranaTuRio"],
                            ["OPEN CLUB", "/openClub"],
                            ["VINO DE RÍO", "/vinoDeRio"],
                            ["MOTO TUR", "/MotoTur"],
                            ["OMM", "/Omm"],
                            ["GlobalTour", "/globalTour"],
                            ["Turismo DEPORTIVO", "/TurismoDeportivo"],
                            ["TURISMO EDUCATIVO", "/TurismoEducativo"],
                            ["REPRESENTACIONES", "/Representaciones"],
                            ["SOBRE NOSOTROS", "/Nosotros"],
                            ["Contacto", "/contacto"],
                        ].map(([label, path]) => (
                            <li className="nav-item" key={label}>
                                <Link className="nav-link px-2 py-1" to={path} onClick={() => setIsOpen(false)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Redes sociales */}
                    <div className="social-icons mt-4">
                        <a href="https://wa.me/5493430000000" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;