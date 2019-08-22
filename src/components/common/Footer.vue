<template>
  <footer>
    <ul><li>FOOTEER</li><li>{{count}} || {{doubleNumber}} || {{feedsLenght}}</li></ul>
    <button @click="incrementCount"></button>  
  </footer>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'Footer',
    computed: {
      ...mapState(['count']),
      doubleNumber(){
        return this.$store.getters.doubleCounter;
      },
      feedsLenght(){
        return this.$store.getters.getFeedsLenght;
      }

    },
    methods: {
      incrementCount(){
        return this.$store.commit('increment', 5)
      }
    } 
  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 40px;
    background-color: #f1f1f1;
  }
</style>