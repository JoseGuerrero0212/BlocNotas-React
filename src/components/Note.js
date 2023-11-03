import React from 'react';

const Note = ({ nota, onDelete }) => {
  return (
    <div className="cajas">
      <h3>{nota.title}</h3>
      <p>{nota.content}</p>
      <button className="eliminar" onClick={() => onDelete(nota.id)}>Eliminar</button>
    </div>
  );
};

export default Note;