import axios from 'axios'

class NoteClient{
  getNote(id) {
    return axios.get(`localhost:8000/note/${id}`);
  }
  getAllNotes() {
    return axios.get('localhost:8000/note');
  }
  createNote(note) {
    return axios.post('localhost:8000/note', note);
  }
  deleteNote(id) {
    return axios.delete(`localhost:8000/note/${id}`);
  }
}

export NoteClient;
