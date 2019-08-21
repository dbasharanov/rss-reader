<template>
  <div class='home'>
    <h1>All Feeds</h1>
    <FeedForm></FeedForm>
    <h1 v-if="!hasFeeds">Spiner Place</h1>
    <ul>
      <li v-for="feed in feeds" :key="feed._id">
        {{feed.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import FeedForm from '../components/FeedForm.vue'

export default {
  name: 'home',
  components:{
    FeedForm
  },
  methods:{
  },
  computed: {
    feeds() {
      return this.$store.state.feeds
    },
    hasFeeds() {
      return this.feeds.length;
    } 
  },
  created(){
    this.$store.dispatch('getFeeds')
  }
}
</script>