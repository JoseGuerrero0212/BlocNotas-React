import React, { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(storedNotes);
    setFilteredNotes(storedNotes);
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((nota) => nota.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleSearch = (searchText) => {
    const filtered = notes.filter((nota) =>
      nota.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <div className="App">
      <h1>Aplicación de Notas</h1>
      <input
        type="text"
        id="buscador"
        className="search-input" 
        placeholder="Buscar una nota..."
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <h1>Crear nueva nota</h1>
      <NoteEditor onAddNote={addNote} />
      <NoteList notes={filteredNotes} onDelete={deleteNote} />
    </div>
  );
}

export default App;
