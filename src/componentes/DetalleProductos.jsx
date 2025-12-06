import { Link, useParams, useLocation } from "react-router-dom";
import styled from 'styled-components'

const ProductoDetalle = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
/* if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/ListaProductos">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  } */
 
  return(
    <div className="container-md py-3">

      <h2 className="mb-3">Detalles del Producto {id}</h2>

      {/* Fila superior para separar en 2 columnas */}
      <div className="row align-items-start g-0 mb-4">

        {/* Columna para la imagen - izquierda (md-6) */}
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
      </div>

      {/* Columna para la información - derecha (md-6) */}

      <div className="col-md-6">
        <div className="card border-0">
          <div className="card-body p-1">

            <h4 className="text-primary mb-2">{producto.nombre}</h4>

            <div className="mb-2">
              <strong>Descripción:</strong>
              <p className="card-text mb-1">{producto.descripcion}</p>
            </div>

            <div className="mb-2">
              <strong>Categoria:</strong>
              <span className="badge bg-secondary ms-1">{producto.categoria}</span>
            </div>

            <div className="mb-3">
              <strong>Precio:</strong>
              <span className="text-success d-inline ms-1">${producto.precio}</span>
            </div>
          </div>
        </div>
      </div>

      {/* <ul>
        <li key={producto.id}>
            {producto.nombre}
            <br />
            <p><strong>Descripción: </strong>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <img src={producto.avatar} alt={producto.nombre} width="30%" />
        </li>
        <hr /> */}
        <Link to={`/ListaProductos`}><BotonEstilizado>Volver</BotonEstilizado></Link>
    {/* </ul>  */}
    </div>
  );
}; export default ProductoDetalle;

const BotonEstilizado = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;


  &:hover {
    background: #31312eff;
    color: white;


  }
`;


