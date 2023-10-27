<template>
    post form
    <button @click="postit()">log</button>
    <button @click="pushData">post it</button>

    {{ item }}
</template>


<script setup>
import { item } from './item.js';
import axios from 'axios';


function postit() {
    console.log(item);
}
const pushData = async () => {

            await axios.post(process.env.VUE_APP_API_MOCKAPI, item[0])
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

      };

</script>