
function OpenClub() {
    return (
        <section className="openclub-section text-center py-5">
            {/* Esta sección parece ser un encabezado o un bloque distintivo en la parte superior */}
            <div>
                <img
                    src="/img/openclub-logo.png"
                    alt="Open Club"
                    className="openclub-logo mb-3"
                />
                <br />
                <button className="openclub-button">
                    ¡Visita nuestra web!
                </button>
            </div>

            {/* Grilla personalizada usando CSS Grid (para imágenes) */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(3, 200px)",
                    gap: "1rem",
                    maxWidth: "1200px", // Ancho máximo para limitar la grilla, ajusta según necesites
                    margin: "0 auto", // Centra la grilla horizontalmente
                    padding: "0 15px" // Agrega algo de padding para pantallas más pequeñas
                }}
                className="my-5" // Agrega margen superior/inferior
            >
                {/* Fila 1 columnas 1-3 */}
                <img
                    src="/img/foto1.jpg"
                    alt="foto1"
                    style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "1", gridRow: "1" }}
                />
                <img
                    src="/img/foto2.jpg"
                    alt="foto2"
                    style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "2", gridRow: "1" }}
                />
                <img
                    src="/img/foto3.jpg"
                    alt="foto3"
                    style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "3", gridRow: "1" }}
                />

                {/* Columna 4, filas 1 a 3 */}
                <img
                    src="/img/foto4.jpg"
                    alt="foto4"
                    style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "4", gridRow: "1 / span 3" }}
                />

                {/* Imagen 5 ocupa fila 2 y 3, columnas 1 a 3 */}
                <img
                    src="/img/foto5.jpg"
                    alt="foto5"
                    style={{ width: "100%", height: "100%", objectFit: "cover", gridColumn: "1 / span 3", gridRow: "2 / span 2" }}
                />
            </div>

            {/* Sección Quienes somos - MODIFICADA PARA DISEÑO IZQUIERDA/DERECHA */}
            <div className="container my-10 px-4">
                {/* Usamos 'row' para crear columnas, 'align-items-center' para centrar verticalmente, 'justify-content-center' para centrar la fila */}
                <div className="row align-items-center justify-content-center">
                    {/* Columna para el título. 'text-md-end' alinea a la derecha en pantallas medianas y grandes, 'text-center' para pantallas pequeñas */}
                    <div className="col-md-4 text-md-end text-center mb-4 mb-md-0">
                        <h2 className="text-3xl font-bold text-gray-800">¿QUIÉNES SOMOS?</h2>
                    </div>
                    {/* Columna para la caja de texto */}
                    <div className="col-md-8">
                        <div className="bg-white shadow-lg rounded-xl p-6 text-left">
                            <p className="text-gray-600">
                                El Complejo Turístico Open Club surge en el año 2008 como una propuesta impulsada por Costanera 241 Viajes y Turismo, con el objetivo de ampliar los servicios ofrecidos a sus clientes.
                                <br /><br />
                                Lo que comenzó como un espacio complementario, rápidamente fue consolidándose como una infraestructura turística de referencia en la región.
                                <br /><br />
                                Actualmente, Open Club se posiciona como un complejo turístico integral y multifuncional, con servicios que abarcan desde el alojamiento y la gastronomía hasta espacios para el desarrollo de eventos, actividades recreativas y propuestas temáticas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        {/* Texto adicional */}
        <h2 className="text-center fw-bold mt-5">NUESTRA INFRAESTRUCTURA INCLUYE</h2>
        <p className="text-center text-muted mb-4">
            Diversas opciones de alojamiento, adaptadas a familias, grupos y delegaciones.
        </p>

        <div className="row">
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
        </section>
    );
}

export default OpenClub;