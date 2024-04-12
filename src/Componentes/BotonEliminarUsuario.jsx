import React from 'react';

function BotonEliminarUsuario({ onEliminar, id }) {

    const confirmarEliminacion = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
          onEliminar(id);
        }
    };

    return (
        <div>
            <button onClick={confirmarEliminacion}>Eliminar</button>
        </div>
    );
}

export default BotonEliminarUsuario;
