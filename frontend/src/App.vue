<template>
    <navbar>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/profile">Go to Profile</router-link>
        <router-link to="/tests">Go to Tests</router-link>

    </navbar>
    <div class="app">
      <router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
