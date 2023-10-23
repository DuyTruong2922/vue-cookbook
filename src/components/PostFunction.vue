<template>
    <button @click="postit()">log</button>
</template>


<script setup>
import DataForm from './DataForm.vue';

function postit() {
    console.log(DataForm.item);
}

</script>