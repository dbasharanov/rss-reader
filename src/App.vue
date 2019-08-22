<template>

  <div>
    <div id="content" class='small-12'>
      <Header></Header>
      <div class='row'>
        <MainMenu></MainMenu>
        <div class='content-wrapper small-offset-1 small-10 medium-offset-2 medium-6'> 
          <router-view/>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
      
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'app',
  components: {
    MainMenu,
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
  $black: #333;
  $primary-color: #f59700;
  $alert-color: #cc4b37;
  $light-gray: #f3f3f3;
  $medium-gray: #e1e1e1;

  * {outline:none;}
  body {
    margin:0;
    padding:0;
  }
  a {
    color: $black;  
    webkit-transition: opacity .3s ease-in;
    -moz-transition: opacity .3s ease-in;
    -o-transition: opacity .3s ease-in;
    transition: opacity .3s ease-in;
    opacity:1;
    text-decoration: none;
    &:hover {
      color: $primary-color;  
      opacity: 0.8;
    }
  }

  .font-14 {
    font-size:14px;
  }
  .font-16 {
    font-size:16px;
  }
  .font-18 {
    font-size:18px;
  }
  .font-24 {
    font-size:24px;
  }
  *[class*='font-'] {line-height: 1.25;}


#content {
  min-height: calc(100vh - 40px);
  padding-top: 100px;
}
.content-wrapper {
  padding: 0;
}
  /*==============GRID*=================*/
.column {
  width: 100%;
  float: left;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
}
.column {
  flex: 1 1 0px;
  padding-right: 0.925rem;
  padding-left: 0.925rem;
  min-width: initial;
}

.small-12 {
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
}
.small-6 {
  width: 50%;
  flex: 0 0 50%;
  max-width: 50%;
}
@media print, screen and (min-width: 40em) {
  .medium-9 {
    flex: 0 0 75%;
    max-width: 75%;
    width: 75%;
  }
  .medium-8 {
    flex: 0 0 66.66666%;
    max-width: 66.66666%;
    width: 66.66666%;
  }
  .medium-6 {
    flex: 0 0 50%;
    max-width: 50%;
    width: 50%;}
  .medium-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    width: 33.33333%;}
  .medium-3 {
    flex: 0 0 25%;
    max-width: 25%;
    width: 25%;}
  .medium-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    width: 16.66667%;} 
}
@media print, screen and (min-width: 64em) {
  .large-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    width: 16.66667%;
  }
  .large-3 {
    width: 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .large-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    width: 33.33333%;
  }
  .large-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    width: 83.33333%;
  }
}
*, *::before, *::after {
    box-sizing: inherit;
}

@media print, screen and (min-width: 45em) {
  .medium-offset-2 {
    margin-left: 16.66667%;
  }
}

div, ul {margin: 0;padding: 0;}
ul{list-style: none;}
.float-left {float: left !important;}
.float-right {float: right !important ;}
.text-left{text-align: left;}
.text-center{text-align: center;}
.text-right{text-align: right;}
*, *::before, *::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
* {
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.row {
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}
.button.primary {
  border: 1px solid #f59700;
  background-color: #f59700;
  color: #fff;
  cursor: pointer;

  &:hover {
    border: 1px solid #f59700;
    background-color: #ffffff;
    color: #f59700;
  }
}
.button.hollow, .button.hollow:hover, .button.hollow:focus {
  background-color: transparent;
}
</style>