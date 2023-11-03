import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  const deleteNote = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <h1>Notas</h1>
      <div className="note-list">
        {notes.map((nota) => (
          <Note key={nota.id} nota={nota} onDelete={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;