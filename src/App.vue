<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <DataForm />
  <GetData msg="CookBook With Vue"/>
  <!-- <base64Test/> -->

</template>

<script setup>
import GetData from './components/GetData.vue'
import DataForm from './components/DataForm.vue'
// import base64Test from './components/base64Test.vue'






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
