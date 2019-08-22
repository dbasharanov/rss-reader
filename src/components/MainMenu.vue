<template>
  <aside class='large-2 medium-3 float-left show-for-medium'>
    <ul class='no-bullet main-menu'>
      <li>
        <router-link to="/">All Feeds <span v-if="feeds_count">({{feeds_count}})</span></router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </aside>
</template >


<script>
  export default {
    name: 'MainMenu',
    methods: {
      
    },
    computed: {
      feeds_count() {
        return this.$store.getters.getFeedsLength;
      }
    }
  }
</script>


<style lang="scss">

  
  $primary-color: #f59700;
  $alert-color: #cc4b37;
  $light-gray: #f3f3f3;
  $medium-gray: #e1e1e1;

  aside {
    background-color: $light-gray;
    height: 100%;
    position: relative;
    top:0;
    padding: 20px 0px 20px;
    font-size:14px;
    border: 2px solid #f59700;
    .main-menu {
      list-style: none;
      li {
        position: relative;
        &:hover {
        }
        a {
          display: block;
          padding: 5px 40px 5px 10px;
          width: 100%;
          &.delete-feed {
            display: none;
            font-size:11px;
            font-weight: bold;
            padding: 0;
            position: absolute;
            width: 20px;
            right: 0px;
            top: 8px;
            text-align: center;
            z-index: 1;
          }
          span {
            font-size: 10px;
          }
        }
        &:hover, &.selected {
          background-color: $medium-gray;
          a {
            color: $primary-color;
            &.delete-feed {
              color: $alert-color;
              display: block;
            }
          }
        }
      }
    }
  }
</style>