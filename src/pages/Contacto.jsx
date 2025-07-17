import React from 'react';

function Contacto() {
    return (
        <section className="contact-section py-5">
            <div className="container">
            

                {/* Formulario */}
                <div className="bg-light p-4 rounded-4 shadow-sm">
                    <h5 className="mb-3 fw-bold">📞 Contacto <span className="fw-normal">PONETE EN CONTACTO CON NOSOTROS</span></h5>
                    <p className="mb-2"><strong>Teléfono:</strong> +54 343 6123731</p>
                    <p className="mb-4"><strong>Correo electrónico:</strong> turismo@costanera241.tur.ar</p>

                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="mb-3">
                            <select className="form-select">
                                <option value="">Área</option>
                                <option value="tresc">TRES C</option>
                                <option value="globaltour">GLOBAL TOUR</option>
                                <option value="paranaturio">PARANÁ TURÍO</option>
                                {/* Más áreas si querés */}
                            </select>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="tel" className="form-control" placeholder="Teléfono" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" rows="4" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning px-4">Enviar</button>
                        </div>
                    </form>
                </div>

                {/* Redes y dirección */}
                <div className="mt-5 text-center">
                    <p className="mb-2">NUESTRAS REDES</p>
                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-whatsapp"></i></a>
                    </div>
                    <p className="text-muted small">
                        Costanera 🌞 - Augusto Bravard 292, Paraná - Entre Ríos, Argentina
                        <br />
                        +54 343 6123731 · turismo@costanera241.tur.ar
                    </p>
                    <p className="text-muted small mb-0">Copyright © 2025 Costanera241</p>
                    <p className="text-muted small">Powered by Boosting Marketing</p>
                </div>
            </div>
        </section>
    );
}

export default Contacto;