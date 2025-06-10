import '../index.css';

function TresC() {
    const TresC = [
        { id: 1, nombre: "Frida Kahlo", imagen: "/img/descarga.png"},
        { id: 2, nombre: "Pablo Picasso", imagen: "/img/descarga.png" },
        { id: 3, nombre: "Vincent van Gogh", imagen: "/img/descarga.png"},
        // agregar más TresC acá
        ];
    
    return (
        <section>
            <h2>TresC</h2>
            <div className="TresC-lista">
            {TresC.map((artista) => (
                <div key={artista.id} className="artista-card">
                <img src={artista.imagen} alt={artista.nombre} />
                <h3>{artista.nombre}</h3>
                </div>
            ))}
            </div>
        </section>
        );
    }

    export default TresC;