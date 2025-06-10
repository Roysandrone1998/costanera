import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3 position-relative">
        <div className="container-fluid d-flex align-items-center justify-content-between">
            {/* Menú hamburguesa a la izquierda */}
            <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo centrado */}
            <Link
            className="navbar-brand fw-bold mx-auto position-absolute start-50 translate-middle-x"
            to="/"
            style={{ left: "50%", transform: "translateX(-50%)" }}
            >
            Costanera241
            </Link>

            {/* Barra de búsqueda a la derecha */}
            <form className="d-flex ms-auto" style={{ maxWidth: "300px", width: "100%" }}>
            <input
                className="form-control"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
            />
            </form>
        </div>

        {/* Menú desplegable vertical */}
        {isOpen && (
            <div
            className="position-absolute bg-white shadow rounded p-3"
            style={{ top: "56px", left: "1rem", width: "200px", zIndex: 1050 }}
            >
            <ul className="nav flex-column">
                {[
                ["Home", "/"],
                ["OpenClub", "/openClub"],
                ["Omm", "/Omm"],
                ["ParanáTuRío", "/paranaTuRio"],
                ["TresC", "/TresC"],
                ["Contacto", "/contacto"],
                ["VinoDeRío", "/vinoDeRio"],
                ["GlobalTour", "/globalTour"],
                ["Temaikén", "/temaiken"],
                ].map(([label, path]) => (
                <li className="nav-item" key={label}>
                    <Link
                    className="nav-link px-2 py-1"
                    to={path}
                    onClick={() => setIsOpen(false)} // cierra menú al click
                    >
                    {label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        )}
        </nav>
    );
}

export default Navbar;