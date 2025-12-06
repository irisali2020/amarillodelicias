// MiBoton.jsx

function MiBoton({ texto, color, onClick }) {
    // Definición de estilos en un objeto (estilo inline)
    const estilo = {
        backgroundColor: color || 'blue', // Uso de 'blue' por defecto si no se pasa 'color'
        color: 'white',
        padding: '10px 20px',
        margin: '5px', // Reduje un poco el margen para que no esté tan separado
        borderRadius: '5px', // Añadí un borde redondeado para mejor estética
        border: 'none',
        cursor: 'pointer', // Indica que es un elemento clickeable
    };

    return (
        <button style={estilo} onClick={onClick}>
            {texto}
        </button>
    );
}

export default MiBoton;
