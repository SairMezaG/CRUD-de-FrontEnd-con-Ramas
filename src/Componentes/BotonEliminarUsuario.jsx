import React from 'react';
import "../Estilos/BotonEliminarUsuario.css";

function BotonEliminarUsuario({ onEliminar, id }) {

    const confirmarEliminacion = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este registro?")) {
          onEliminar(id);
        }
    };

    return (
        <div>
            <button className='botonEliminarUsuario'   onClick={confirmarEliminacion}>Eliminar</button>
            
        </div>
    );
}

export default BotonEliminarUsuario;
