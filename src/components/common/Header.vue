<template>
  <header>
    <div class='row'>
      <div class='small-12'>
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
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      logout() {
        console.log("Are BE")
        localStorage.removeItem('authtoken');
        localStorage.removeItem('username');
        this.$store.state.isAuthenticated = false;
      }
    }
  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 40px;
    -webkit-box-shadow: 0px 4px 17.3px 0.7px rgba(17,18,22,0.15);
    box-shadow: 0px 4px 17.3px 0.7px rgba(17,18,22,0.15);
    background-color: #f1f1f1;
    padding: 0 0 15px;
    position: fixed;
    z-index: 5;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
    padding: 0;
    top: -1px;
    ul {
      text-align: right;
      float: right;
      list-style: none;
      li {
        float: left;
        padding: 10px;
      }
    }
  }
</style>