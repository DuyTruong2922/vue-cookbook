<template>
    <div>
      <button @click="showModal()">update</button>
  
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="hideModal()">&times;</span>
          <h2>Modal Title</h2>
          <!-- Modal content goes here... -->
          {{ updateObj }}
            <form @submit.prevent>
                <input type="text" v-model="updateObj.value.title" placeholder="title">
                <br>
                <input type="text" v-model="updateObj.value.content" placeholder="content">
                <br>
                  <div>
                  <h1>The Steps</h1>
                    <button @click="addInput">Thêm bước</button>
                    <div v-for="(input, index) in updateObj.value.step_descriptions" :key="index">
                      <input v-model="input.step" type="text" placeholder="step">
                      {{ input.step }}
                      <br>
                      <input v-model="input.description" type="text" placeholder="description">
                      <br>
                      <!-- =========================================================================== -->
                      <!-- BASE64 FUNCTION -->
                      <input type="file" @change="(event) => fileToBase64(event, index)">
                      <div v-if="input.image">
                        <img :src="input.image" alt="Preview" sizes="100">
                      </div>
                      <!-- =========================================================================== -->
                      <button @click="removeInput(index)">Bỏ bước</button>
                    </div>
                  </div>
                <br>
                <!-- <PostFunction/> -->
                <button @click="updatePostById(updateObj.value.id)">up to api</button>
            </form>

          <!-- Modal content goes here... -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  import { updateObj,updatePostById } from '../js/UpdateFunction'
  console.log(updateObj);
  // ===========================================================================
  // MODAL FUNCTIONS
  const isModalOpen = ref(false);
  
  function showModal() {
    this.isModalOpen = true;
  }
  function hideModal() {
    this.isModalOpen = false;
  }

  const count =ref(2);
  // ===========================================================================

  // ===========================================================================
// ADD INPUT FIELD
const addInput = () => {
    updateObj.step_descriptions.push({ step: 'Bước '+count.value++,description:'' });
  
};

const removeInput = (index) => {
    updateObj.step_descriptions.splice(index, 1);
};
// ===========================================================================


  // ===========================================================================
  // BASE64 FUNCTION
  const fileToBase64 = (event, index) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      updateObj.step_descriptions[index].image = base64Data;
    };

    reader.readAsDataURL(file);
  };
// ===========================================================================


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