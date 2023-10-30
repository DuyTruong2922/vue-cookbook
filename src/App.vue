<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <DataForm />
  <GetData msg="CookBook With Vue"/>
  <!-- <base64Test/> -->

</template>

<script setup>
import GetData from './components/view/GetData.vue'
import DataForm from './components/view/DataForm.vue'







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
