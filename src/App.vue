<template>
  <div id="app">
    <md-toolbar>
      <h1 class ="md-title">{{ title }}</h1>
      <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
        <md-dialog-title>Add New Note</md-dialog-title>

        <md-dialog-content>
          <form>
            <md-input-container>
              <label>Title</label>
              <md-textarea v-model="prompt.titleField"></md-textarea>
            </md-input-container>
          </form>
          <form>
            <md-input-container>
              <label>Note</label>
              <md-textarea v-model="prompt.bodyField"></md-textarea>
            </md-input-container>
          </form>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
          <md-button class="md-primary" @click="closeDialog('dialog1')" v-on:click="addNote()">Ok</md-button>
        </md-dialog-actions>
      </md-dialog>

      <md-button class="md-primary md-raised" id="custom" @click="openDialog('dialog1')">Add New Note</md-button>
    </md-toolbar> <!-- Here is the cutoff -->
    <div class="content">
      <md-layout md-gutter=16>
        <md-layout v-for="note in notes" v-bind:key="note.title">
          <md-card md-with-hover>
            <md-card-header>
              <div class="md-title">{{ note.title }}</div>
              <!--<div class="md-subhead">Subtitle here</div>-->
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
import NoteClient from './client/client.js'
let noteClient = new NoteClient();

export default {
  name: 'app',
  data () {
    return {
      title: 'Keep Clone',
      notes:  [],
      prompt: {
        titleField: '',
        bodyField: ''
      }
    }
  },
  created() {
    this.updateNotes();
  },
  methods: {
    addNote() {
      let self = this;
      noteClient.createNote({
        title: self.prompt.titleField,
        body: self.prompt.bodyField
      })
      .then(function (response) {
        self.notes.push(response.data);
      })
      .catch(function (response) {
        console.log(error);
      });
    },
    deleteNote(note) {
      let self = this;
      noteClient.deleteNote(note.id)
      .then(function (response) {
        self.notes.splice(self.notes.indexOf(note), 1);
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
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
