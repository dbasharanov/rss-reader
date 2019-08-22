<template>
  <div class='form-wrapper'>
    <form @submit.prevent="postNewFeed">  
      <input placeholder="Add New Feed URL" type="text"  id="feedUrl" v-model="$v.url.$model">
      <input type="submit"  value='Add Feed' :disabled="$v.invalid" class="button primary" >
      <p v-if="!$v.invalid">
        {{url}}
      </p>
    </form>
  </div>
</template>

<script>


import { required } from 'vuelidate/lib/validators';
import config from '@/config/db'

export default {
  name: 'FeedForm',
  data() {
    return {
      url: ''
    }
  },
  validations: {
    url: { 
      required,
      notUrl: val => !/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(val)
    }
  },
  components: {
    
  },
  methods: {
    postNewFeed() {
      const authString = btoa(config.appKey + ':' + config.appSecret);
      fetch('https://baas.kinvey.com/appdata/' + config.appKey + '/feeds', {
        method: 'POST',
        headers: {
          'Authorization': 'Kinvey '+ localStorage.getItem('authtoken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: this.url
        }),
      }).then(res => res.json())
      .then(data => console.log(data));
    }
  }
}
</script>


<style lang="scss">
  .form-wrapper {
    margin-bottom:30px;
    overflow: hidden;
    form {
      input {
        padding: 0 5px;
        float: left;
        height: 40px;
        &#feedUrl {
          width: calc(100% - 100px);
        }
      }
      input[type="submit"] {width: 100px;height: 40px;}
    } 
  }

</style>