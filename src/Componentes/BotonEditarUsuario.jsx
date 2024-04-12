import React from 'react';
import "../Estilos/BotonEditarUsuario.css";
function BotonEditarUsuario({ onEditar, usuario }) {

    const confirmarEdicion = () => {
        if (window.confirm("¿Estás seguro de que quieres hacer cambios para este usuario?")) {
          onEditar(usuario);
        }
    };

    return (
        <div>
            <button className='botonEditarUsuario'   onClick={confirmarEdicion}>Editar</button>
        </div>
    );
}

export default BotonEditarUsuario;
