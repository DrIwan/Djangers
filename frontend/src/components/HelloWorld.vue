<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script> -->
<template>
    <div class="hello">
      <h1 class="title">TODO APP</h1>

      <hr>

      <div class="columns">
        <div class="column is-one-third is-offset-one-third">
          <form>
            <h2 class="subtitle">Add the task</h2>

            <div class="field">
              <label class="label">Add Description</label>
              <div class="control">
                <input class="input" type="text">
              </div>
            </div>

            <div class="field">
              <label class="label">Select Status</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option value="worktodo">Work To do</option>
                    <option value="workdone">Work Done</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <hr>

      <div class="columns">
        <div class="column is-half">
          <h2 class="subtitle">Task Todo</h2>

         <div class="todo">
        <div class="card" v-for="task in tasks" v-if="task.status == 'todo'">
          <div class="card-content">
            <div class="content">
              {{ task.work_description }}
            </div>
          </div>

          <footer class="card-footer">
            <a class="card-footer-item">Work Done</a>
          </footer>
        </div>
      </div>
    </div>
    </div>

    <div class="column is-half">
      <h2 class="subtitle">Work Done</h2>

      <div class="done">
        <div class="card" v-for="task in tasks" v-if="task.status == 'done'">
          <div class="card-content">
            <div class="content">
              {{ task.work_description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        tasks: []
      }
    },
    mounted () {
      this.get_Tasks();
    },
    methods: {
      get_Tasks() {
          axios({
              method:'get',
              url: 'http://127.0.0.1:8000/tasks/',
              auth: {
                  username: 'your username',
                  password: 'your password'
              }
          }).then(response => this.tasks = response.data);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
