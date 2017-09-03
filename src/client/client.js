import axios from 'axios'

class NoteClient{

  getNote(id) {
    return axios.get(`http://localhost:3000/note/${id}`);
  }
  getAllNotes() {
    return axios.get('http://localhost:3000/notes');
  }
  createNote(note) {
    return axios.post('http://localhost:3000/note', note);
  }
  deleteNote(id) {
    return axios.delete(`http://localhost:3000/note/${id}`);
  }
}

export default NoteClient
