<template>
  <h1>HelloWorldHi</h1>
  <ProductComponent />
</template>

<script>
import ProductComponent from './components/ProductComonent.vue';

export default {
  name: 'App',
  components: {
    ProductComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
