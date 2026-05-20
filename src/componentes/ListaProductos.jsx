import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarritoCompras from "./Carrito";

import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";


export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 
  // Contexto
  const { agregarAlCarrito } = useCartContext();
  const {usuario} = useAuthContext();
  const esAdmin = usuario?.nombre === "admin";

  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1); 
  const productosPorPagina = 3;

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
    (producto.categoria && producto.categoria.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);
 
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);


  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1);
  };

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
    <>
      <header className="container mt-4">
          <h1 className="display-5 fw-bold">Amarillo Delicias | Postres</h1>
          <p className="lead text-muted">Filtra por nombre o tamaño (pequeño, mediano, grande) para encontrar el postre que buscas.</p>
      </header>

      <div className="container mt-4">
          {/* Barra de búsqueda */}
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <label className="form-label fw-bold">Buscar productos</label>
              <input
                type="text"
                placeholder="Buscar por nombre o categoría..."
                className="form-control"
                value={busqueda}
                onChange={manejarBusqueda}
              />
              {busqueda && (
                <small className="text-muted">
                  Mostrando {productosFiltrados.length} de {productos.length} productos
                </small>
              )}
            </div>
          </div>
        </div>

    {/* Fila superior para separar en 2 columnas */}
        <div className="row align-items-start g-0 mb-4"></div>    

          <ul id="lista-productos">
            {productosActuales.map((producto) => (
              <li key={producto.id}>
                <h2 className="mb-3">{producto.nombre}</h2>
                <br />
                <div className="mb-2">
                  <strong>Descripción:</strong>
                  <p className="card-text mb-1">{producto.descripcion}</p>
                </div>
                <br />
                <div className="mb-2">
                  <strong>Categoria:</strong>
                  <span className="badge bg-secondary ms-1">{producto.categoria}</span>
                </div>
                <br />

                <div className="mb-3">
                  <strong>Precio:</strong>
                  <span className="text-success d-inline ms-1">${producto.precio}</span>
                </div>
                <br />
                <div className="col-md-6">
                  <div className="card border-0">
                    <div className="card-body text-center p-2">
                      <img
                        src={producto.avatar}
                        alt={producto.nombre}
                        className="img-fluid rounded w-75"
                    />
                </div>
              </div>
            </div>
            

                <Link to={`/productos/${producto.id}`} state={{ producto }}>
                  <button className="boton-detalles">Más detalles</button>
                </Link>
                
                <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>

                {/* Botón Editar - SOLO visible para admin */}
                {esAdmin && (
                  <div>
                    <hr/>
                    <button
                      onClick={() =>
                        navigate("/editar-productos", {
                          state: { producto: producto },
                        })
                      }
                      style={{
                        backgroundColor: "#28a745",
                        color: "white",
                        marginRight: "10px",
                      }}
                    >
                      Editar
                    </button>

                    <button
                      onClick={() =>
                        navigate("/eliminar-productos", {
                          state: { producto: producto },
                        })
                      }
                      style={{
                        backgroundColor: "#ee0a0aff",
                        color: "white",
                        marginRight: "10px",
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
            </li>
         ))}        
                
       </ul>

       <div className="container mx-auto p-4">
          <div className="mt-12 mb-8 p-4"> 

       {productosFiltrados.length > productosPorPagina && (
              <div className="d-flex justify-content-center my-4">
                {Array.from({ length: totalPaginas }, (_, index) => (
                  <button
                    key={index + 1}
                    className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => cambiarPagina(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Información de la página actual */}  
            {productosFiltrados.length > 0 && (
              <div className="text-center text-gray-500 mb-8">
                <small>
                  Mostrando {productosActuales.length} productos
                  (página {paginaActual} de {totalPaginas})
                </small>
              </div>
              )}
            </div>
          </div>
       <CarritoCompras /> 
    </>
  );
}