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
        <h1 class="title">TESTS</h1>
        <div class="columns">
            <div class="tests" v-if="tests.count > 0">
                <div class="test" v-for="test in tests.results" :key="test.id">
                    <div class="card-content">
                        <h2 class="subtitle">
                            {{ getTestName(test) }}
                        </h2>
                        <!-- <div class="contents" v-for="contents in tests.results" :key="test.id"> -->
                            <!-- {{ test.Name }} -->
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
    // name: 'TestsPage',
    data () {
      return {
        tests: []
      }
    },
    mounted () {
      this.get_Tests();
    },
    methods: {
      get_Tests() {
        // axios.get('/tests').then(response => this.tests = response.data)
        axios({
            method:'get',
            url: 'http://127.0.0.1:9000/tests/',
            auth: {
                username: 'admin',
                password: 'Qwe12345!'
            }
        }).then(response => this.tests = response.data);
      },
      getTestID(test) {
        return `${test.id}`// ${user.first_name} ${user.third_name}`
      },
      getTestName(test) {
        return `${test.Name}`// ${user.first_name} ${user.third_name}`
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
