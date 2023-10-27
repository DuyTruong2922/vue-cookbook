<template>
    <div>
      <button @click="showModal()">add a new item</button>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="hideModal()">&times;</span>
          <h2>Modal Title</h2>
          <!-- Modal content goes here... -->
            <form @submit.prevent>
                <input type="text" v-model="title" placeholder="title">
                <br>
                <input type="text" v-model="content" placeholder="content">
                <br>
                  <div>
                  <h1>The Steps</h1>
                    <button @click="addInput">Thêm bước</button>
                    <div v-for="(input, index) in step_description" :key="index">
                      <input v-model="input.step" type="text" placeholder="step">
                      <br>
                      <input v-model="input.description" type="text" placeholder="description">
                      <br>
                      <input type="file" @change="uploadFile">
                      <img :src="imgBase64[index]" :sizes="100" alt="">
                      <button @click="removeInput(index)">Bỏ bước</button>
                    </div>
                  </div>
                <br>
                <br>
                <button @click="item.push({title:title,
                                            content:content,
                                            step_descriptions:step_description})">
                  push it !
                </button>
                <!-- {{ item }} -->
                {{ imgBase64s }}
                <PostFunction/>
            </form>

          <!-- Modal content goes here... -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PostFunction from './PostFunction.vue'
  import { item,imgBase64s,step_description } from "./item";


  // temp 
  // if a0 > a1
  // temp = a0
  // a0 = a1
  // a1 = temp
  
  const isModalOpen = ref(false);
  
  function showModal() {
    this.isModalOpen = true;
  }
  function hideModal() {
    this.isModalOpen = false;
  }

const title =ref("");
const content =ref("");
// const file = ref(null);
const count =ref(2);



const uploadFile = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const base64Data = reader.result.split(',')[1];

    console.log('Base64 Data:', base64Data);

    // if (!step_description) {
    //   step_description.push({ step: 'Bước 1', description: '', image: base64Data });
    // } else {
    //   step_description.push({ step: 'Bước ' + count.value++, description: '', image: base64Data });
    // }
    imgBase64s.push(base64Data)

  };

  // Reset the selected file
  event.target.value = null;
};




const addInput = () => {
  step_description.push({ step: 'Bước '+count.value++,description:'' });
  
};

const removeInput = (index) => {
  step_description.splice(index, 1);
  count.value--;
};
  </script>
  
  <style>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>