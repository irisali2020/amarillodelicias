import React from "react";
import './App.css'
import Inicio from "./componentes/inicio";
import Navbar from "./componentes/navbar";
import Productos from "./componentes/ListaProductos";
import ProductoDetalle from "./componentes/DetalleProductos";
import Footer from "./componentes/Footer";
import CarritoCompras from "./componentes/Carrito";
import Contacto from './componentes/Contacto';
import Pagar from "./componentes/Pagar";
import RutaProtegida from "./componentes/RutaProtegida";
import IniciarSesion from "./componentes/IniciarSesion";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./componentes/Dashboard";
import AgregarProducto from "./elementos/AgregarProductos";
import EditarProductos from "./elementos/EditarProductos";
import FormularioProducto from "./elementos/FormularioProducto";
import EliminarProducto from "./elementos/EliminarProductos";
import Layout from "./elementos/Layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 


function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Navbar />
              <Layout>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/ListaProductos" element={<Productos />} />
              <Route path="/productos/:id" element={<ProductoDetalle />} />         
              <Route path="/Contacto" element={<Contacto />} />         
              <Route path="/Carrito" element={<CarritoCompras />} />
              <Route path="/IniciarSesion" element={<IniciarSesion />} />
              <Route path="/Dashboard" element={<RutaProtegida soloAdmin={true}><Dashboard /></RutaProtegida>}/>
              <Route path="/Pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>

              {/* RUTA PROTEGIDA - Admin */}
              <Route path="/agregar-producto" element={<RutaProtegida soloAdmin={true}><AgregarProducto /></RutaProtegida>}/>
              <Route path="/editar-productos" element={<RutaProtegida soloAdmin={true}><EditarProductos /></RutaProtegida>}/>
              <Route path="/formulario-producto" element={<RutaProtegida soloAdmin={true}><FormularioProducto /></RutaProtegida>}/>
            
              <Route path="/eliminar-productos" element={<RutaProtegida soloAdmin={true}><EliminarProducto /></RutaProtegida>}/>
                      

            

        </Routes>
        
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          draggable
          pauseOnHover
        />
            </Layout>
          </ProductsProvider>
        </ CartProvider>
      </ AuthProvider>
    </div>
  );
} export default App;