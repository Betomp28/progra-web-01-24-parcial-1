import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function RegistroFormulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    confirmarCorreo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formulario.correo !== formulario.confirmarCorreo) {
      alert('correo electrónico incorrecto');
    } else {
      console.log('Correo electrónico:', formulario.correo);
      
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <img src="https://picsum.photos/200/300"  />
      <div>
        <h2>Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={formulario.nombre} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" value={formulario.apellido} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" value={formulario.correo} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="confirmarCorreo">Confirmar Correo Electrónico:</label>
            <input type="email" id="confirmarCorreo" name="confirmarCorreo" value={formulario.confirmarCorreo} onChange={handleChange} required />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroFormulario;








































































































































































 
 
 
 
 
 
 
 
 
 
 
 

 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
























































































































