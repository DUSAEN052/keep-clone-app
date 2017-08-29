<template>
  <div id="app">
    <md-toolbar>
      <h1 class ="md-title">{{ title }}</h1>
    </md-toolbar>
    <div class="content">
      <md-layout md-gutter=16>
        <md-layout>
          <md-card>
            <md-card-header>
              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-layout>

        <md-layout>
          <md-card>
            <md-card-header>
              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-layout>

        <md-layout>
          <md-card>
            <md-card-header>
              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </md-layout>

      </md-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Keep Clone'
    }
  }
}
</script>

<style>
.content {
  padding: 20px;
}
</style>
