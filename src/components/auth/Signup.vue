<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="onFormSubmit">
      <label for="username">Username</label>
      <input type="text" v-model="username" id="username" placeholder="Ivan Ivanov">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="ivan@gmail.com">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="******">

      <input type="submit" value="Register" :disabled="$v.$error">
    </form>
  </div>
</template>   


<script>
  import { required } from 'vuelidate/lib/validators';

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
    methods: {
      onFormSubmit(){
        console.log("WORK");
      }
    }
  }
</script>