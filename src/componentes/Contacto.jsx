import React, { useState } from 'react'

function Contacto() {

  const [nombre, setNombre] = useState('');

  const [solicitud, setSolicitud] = useState('');

  const manejarCambioNombre = (e) => {
    setNombre(e.target.value); // actualiza el estado con el valor del input
  };

  const manejarCambioSolicitud = (e) => {
    setSolicitud(e.target.value); // actualiza el estado de la solicitud
  };

  return (
    <>
    <div class="contact-title">
                <h1 class="contact-title">Contacto</h1>
                <p class="contact-subtitle">Envianos tus consultas por este medio</p>
            </div>
            <hr></hr>
            <div class="datos-container">
                <form action="https://formspree.io/f/mgvjenre" method="post">
                    <div class="datos-item">
                        <input class="input" type="text" name="Nombre" id="nombre" placeholder="Ingrese su nombre: " required="*" maxlength="50"></input>
                        <input class="input" type="email" name="Email" id="email" placeholder="Ingrese su email: " required="*" maxlength="75">
                        </input>
                    </div>
              
                    <div class="datos-item-2">
                        <div class="select-box">
                            <p class="contact-paragraph">Seleccione una de las opciones que aparecen a la izquierda del espacio para hacer su consulta</p>
                            <select name="opciones" class="select">
                                <option value="opcion1"> Productos</option>
                                <option value="opcion2"> Entregas</option>
                            </select>
                        </div>
                        <textarea class="text-area" name="Consulta: " rows="15" cols="75" placeholder="Escriba aquí su consulta"></textarea>
                        <div class="button-box">
                            <button class="item-button" type="submit">Enviar</button>                
                            <button class="item-button" type="reset">Restablecer</button>
                        </div>
                    </div>                 
                </form>
            </div>   
        
      </>     
  );
} export default Contacto
