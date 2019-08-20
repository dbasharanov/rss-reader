<template>
  <header>
    <ul>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
  </ul>
  </header>
</template>

<script>
  export default {
    name: 'Header' 
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 40px;
    background-color: #fff234;
  }
</style>