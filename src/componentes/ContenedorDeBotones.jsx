// ContenedorDeBotones.jsx (o App.jsx)

import MiBoton from './MiBoton'; // Asegúrate de que la ruta de importación sea correcta

function ContenedorDeBotones() {
    // Función de ejemplo para el click
    const manejarClickOferta1 = () => {
        alert('Torta Venadito clickeada!');
    };
    
    const manejarClickOferta2 = () => {
        alert('Choco-torta clickeada!');
    };

    const manejarClickOferta3 = () => {
        alert('Cupcakes clickeados!');
    };

    return (
        <div>
            {/* Uso del componente con diferentes props */}
            <MiBoton 
                texto="Torta Venadito" 
                color="green" 
                onClick={manejarClickOferta1}
            />
            
            <MiBoton 
                texto="Choco-torta" 
                color="red" 
                onClick={manejarClickOferta2}
            />

            <MiBoton 
                texto="Cupcakes" 
                color="orange"
                onClick={manejarClickOferta3}
            />
        </div>
    );
}

export default ContenedorDeBotones;