<template>
  <div class='home'>
    <h1>All Feeds</h1>
    <FeedForm></FeedForm>
  </div>
</template>

<script>
import FeedForm from '../components/FeedForm.vue'

export default {
  name: 'home',
  components:{
    FeedForm}
}
</script>