<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-button type="is-brown">クリック</b-button>
    <carousel/>
    <collapse/>
    <Dialog/>
    <dropdown/>
    <Form/>
    <Table/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Carousel from './components/Carousel.vue';
import Collapse from './components/Collapse.vue';
import Dialog from './components/Dialog.vue';
import Dropdown from './components/Dropdown.vue';
import Form from './components/Form.vue';
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Collapse,
    Dialog,
    Dropdown,
    Form,
    Table
    // HelloWorld
  }
}
</script>

<style lang="scss">
@import './assets/style/app.scss';
// @import "~bulma/sass/utilities/_all";
// @import '~bulma';
// @import '~buefy/src/scss/buefy';

// $base_brown: '#593315';

// $custom-colors: null !default;
// $custom-shades: null !default;

// $colors: mergeColorMaps(
//  $custom-colors
// );

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
  // .button {
  //   color: red;
  //   background-color: red !important;
  // }
  // .button:hover {
  //   background-color: blue;
  // }


</style>
