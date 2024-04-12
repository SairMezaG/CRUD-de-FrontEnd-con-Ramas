import React from 'react';
import BotonEliminarUsuario from './BotonEliminarUsuario';
import BotonEditarUsuario from './BotonEditarUsuario';
import ContadorRegistros from './ContadorDeRegistros';
import "../Estilos/Tabla.css";

const Tabla = ({ usuarios, onEditar, onEliminar }) => {
  const cantidadRegistros = usuarios.length;

  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.descripcion}</td>
              <td>
                <BotonEditarUsuario onEditar={onEditar} usuario={usuario} />
                <BotonEliminarUsuario onEliminar={onEliminar} id={usuario.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ContadorRegistros cantidadRegistros={cantidadRegistros} />
    </div>
  );
};

export default Tabla;


