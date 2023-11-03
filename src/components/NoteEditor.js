import React, { useState } from 'react';

const NoteEditor = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    onAddNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-form">
  <input
    type="text"
    id="titulo"
    placeholder="Título"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <input
    type="text"
    id="contenido"
    placeholder="Contenido"
    value={content}
    onChange={(e) => setContent(e.target.value)}
  />
  <button className="guardar" onClick={handleAddNote}>Guardar</button>
</div>
  );
};

export default NoteEditor;