<template>
  <header>
    <ul>
      <li>
        <template v-if='isAuthenticated'>
          <a href="/logout" @click.prevent="logout">LogOut</a>
        </template>
        <template v-else>
          <router-link to="/login">Login</router-link> |
          <router-link to="/signup">SignUp</router-link>
        </template>
      </li>
  </ul>
  </header>
</template>

<script>
  export default {
    name: 'Header' ,
    methods: {
      logout() {
        console.log("Are BE")
        localStorage.removeItem('authtoken');
        localStorage.removeItem('username');
      }
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 40px;
    background-color: #fff234;
  }
</style>