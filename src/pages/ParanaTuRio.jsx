function ParanaTuRio() {
    return (
        <section className="parana-turismo-section py-5">
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

        
             {/* Sección OBJETIVOS */}
            <div className="container my-5 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center text-md-start">OBJETIVOS</h2>
                <div className="row align-items-start justify-content-center">
                    {/* Columna para el texto de Objetivos */}
                    <div className="col-md-7 col-lg-8 text-left mb-4 mb-md-0"> {/* Ajusta el tamaño de la columna para el texto */}
                        <p className="text-gray-700 mb-3">
                            Promover el turismo náutico como una forma de acercarse a la naturaleza, la cultura
                            y la identidad del litoral entrerriano.
                        </p>
                        <p className="text-gray-700 mb-3">
                            Desarrollar una oferta diversa, accesible y de calidad en productos turísticos vinculados al río
                            Paraná, tanto para viajeros individuales como para empresas.
                        </p>
                        <p className="text-gray-700 mb-3">
                            Posicionar el río Paraná como un atractivo turístico de relevancia nacional e internacional,
                            destacando su valor natural, histórico y cultural.
                        </p>
                        <p className="text-gray-700 mb-3">
                            Brindar experiencias memorables, seguras y auténticas, siendo verdaderos anfitriones del río,
                            mostrando sus paisajes, sus sabores y sus tradiciones.
                        </p>
                        <p className="text-gray-700">
                            Ser referentes en el desarrollo del turismo náutico en la región, innovando continuamente en
                            servicios y propuestas adaptadas a distintos públicos y necesidades.
                        </p>
                    </div>
                    {/* Columna para la imagen */}
                    <div className="col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-end"> {/* Ajusta el tamaño de la columna para la imagen */}
                        <img
                            src="/img/IMG_1618_1.jpg" // Asegúrate de que esta sea la ruta correcta a tu imagen
                            alt="Hombre en un bote en el Paraná"
                            className="img-fluid rounded-xl shadow-lg" // 'img-fluid' para que la imagen sea responsiva, 'rounded-xl' y 'shadow-lg' para el estilo
                            style={{ maxHeight: '400px', objectFit: 'cover' }} // Ajusta la altura máxima si es necesario
                        />
                    </div>
                </div>
            </div>

            {/* Sección PRODUCTOS */}
            <div className="container my-5 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center text-md-start">PRODUCTOS</h2>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 text-left"> {/* Columna para la lista de productos */}
                        <ul className="list-unstyled text-gray-700">
                            <li className="mb-2">Excursiones Náuticas</li>
                            <li className="mb-2">Gastronomía Isleña</li>
                            <li className="mb-2">Alojamientos Flotantes</li>
                            <li className="mb-2">Travesías Náuticas por el Paraná</li>
                            <li className="mb-2">Alquiler de embarcaciones</li>
                            <li className="mb-2">Campamentos de pesca</li>
                            <li className="mb-2">Gastronomía a bordo</li>
                            <li className="mb-2">Turismo corporativo</li>
                            <li className="mb-2">Jornadas recreativas</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sección ANTECEDENTES */}
            <div className="container my-5 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center text-md-start">ANTECEDENTES</h2>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 text-left"> {/* Columna para el texto de antecedentes */}
                        <p className="text-gray-700">
                            "Paraná Río" es una propuesta original para el desarrollo turístico local con más de 10 años de experiencia en el ámbito del turismo náutico y fluvial en la región.
                            Nuestro compromiso es con la promoción y desarrollo del turismo náutico, aprovechando la riqueza natural y cultural de nuestra zona.
                            Creemos en la importancia de ofrecer experiencias auténticas que resalten la belleza del río Paraná y su entorno, fomentando el disfrute responsable de este patrimonio.
                            Trabajamos para posicionar a Paraná como un referente en el turismo fluvial, garantizando servicios de calidad y momentos inolvidables para nuestros visitantes.
                            <br/><br/>
                            {/* Puedes añadir más texto aquí si lo deseas */}
                        </p>
                    </div>
                </div>
            </div>
            

        

        <div className="alert alert-danger mt-4">Test de Bootstrap</div>
        </section>
    );
}

export default ParanaTuRio;