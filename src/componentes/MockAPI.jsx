import { useState, useEffect } from "react";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://68dad96c23ebc87faa316b2d.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;


  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          Nombre: {producto.nombre}
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="100" />
        </li>
      ))}
    </ul>
  );
}
