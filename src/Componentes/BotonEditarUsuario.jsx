import React from 'react';

function BotonEditarUsuario({ onEditar, usuario }) {

    const confirmarEdicion = () => {
        if (window.confirm("¿Estás seguro de que quieres hacer cambios para este usuario?")) {
          onEditar(usuario);
        }
    };

    return (
        <div>
            <button onClick={confirmarEdicion}>Editar</button>
        </div>
    );
}

export default BotonEditarUsuario;
