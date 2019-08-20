<template>
  <div class='form-wrapper'>
    <form @submit.prevent="onSubmit">  
      <input placeholder="Add New Feed URL" type="text"  id="feedUrl" v-model="$v.url.$model">
      <input type="submit" name="commit" value="ADD" class="button primary hollow" :disabled="$v.invalid">
      {{url}}
    </form>
  </div>
</template>

<script>


import { required } from 'vuelidate/lib/validators';

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
    onSubmit() {

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
        &[type="submit"] {
          width: 100px; 
        }
      }
    } 
  }

.button.hollow.primary {
  border: 1px solid #f59700;
  color: #f59700;
}
.button.hollow, .button.hollow:hover, .button.hollow:focus {
  background-color: transparent;
}
</style>