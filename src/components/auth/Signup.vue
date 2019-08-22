<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="onFormSubmit">
      <label for="username">Username</label>
      <input type="text" v-model="username" id="username" placeholder="Ivan Ivanov">
      <label for="email">Email</label>
      <input type="text" v-model="email" id="email" placeholder="ivan@gmail.com">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" placeholder="******">

      <input type="submit" value="Register" :disabled="$v.$error">
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
        email: '',
        password: ''
      }
    },
    validations: {
      username: {required},
      email: {required},
      password: {required}
    },
    mixins: [registerUser],
    methods: {
      onFormSubmit(){
        this.registration(this.username, this.password, this.email)
            .then(res => this.$router.push('/'));
      }
    }
  }
</script>