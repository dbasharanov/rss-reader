<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="onFormSubmit">
      <label for="login">Username</label>
      <input type="text" v-model="username" id="login" placeholder="Ivan Ivanov">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" placeholder="******">

      <input type="submit" value="Login" :disabled="$v.$error">
    </form>
  </div>
</template>

<script>
  import { required } from 'vuelidate/lib/validators';
  import axios from 'axios';
  import config from '@/config/db';
  import { registerUser } from '@/services/authServices'
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    validations: {
      username: {required},
      email: {required}
    },
    mixins: [registerUser],
    methods: {
      onFormSubmit(){
        this.login(this.username, this.password)
            .then(res => this.$router.push('/'));
      }
    }
  }
</script>