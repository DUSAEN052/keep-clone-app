<template>
  <div id="app">
    <md-toolbar>
      <h1 class ="md-title">{{ title }}</h1>
    </md-toolbar>
    <div class="content">
      <md-layout md-gutter=16>
        <md-layout v-for="note in notes"
        v-bind:key="note.title">
        <md-card md-with-hover>
          <md-card-header>
            <div class="md-title">{{ note.title }}</div>
            <div class="md-subhead">Subtitle here</div>
          </md-card-header>

          <md-card-content>
            {{ note.body }}
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button v-on:click="deleteNote(note)">Delete</md-button>
          </md-card-actions>
        </md-card>
      </md-layout>

    </md-layout>
  </div>
</div>
</template>

<script>
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
let noteClient = new NoteClient();

export default {
  name: 'app',
  data () {
    return {
      title: 'Keep Clone',
      notes:  []
    }
  },
  created() {
    this.updateNotes();
  },
  methods: {
    addNotes() {
      let self = this;

    },
    deleteNote(note) {
      let self = this;
      noteClient.deleteNote(note.id)
        .then(function (response) {
          self.notes.splice(self.notes.indexOf(note), 1);
          console.log(note.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateNotes() {
      let self = this;
      noteClient.getAllNotes()
        .then(function (response) {
          self.notes = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
