import React from 'react';


const Filtro = ({ onFiltrar }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por inicial del nombre"
        onChange={(e) => onFiltrar(e.target.value)}
      />
    </div>
  );
};

export default Filtro;
