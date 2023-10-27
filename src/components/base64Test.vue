<template>
  <div>
    <button @click="showModal">Add a new item</button>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="hideModal">&times;</span>
        <h2>Modal Title</h2>
        <!-- Modal content goes here... -->
        <form @submit.prevent>
          <input type="text" v-model="title" placeholder="Title">
          <br>
          <input type="text" v-model="content" placeholder="Content">
          <br>
          <div>
            <h1>The Steps</h1>
            <button @click="addInput">Thêm bước</button>
            <div v-for="(input, index) in step_description" :key="index">
              <input v-model="input.step" type="text" placeholder="Step">
              <br>
              <input v-model="input.description" type="text" placeholder="Description">
              <br>
              <input type="file" @change="uploadFile(index)">
              <button @click="removeInput(index)">Bỏ bước</button>
            </div>
          </div>
          <br>
          <br>
          <button @click="addItem">Push it!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// import PostFunction from './PostFunction.vue';
import { item } from "./item";

const isModalOpen = ref(false);
const title = ref("");
const content = ref("");
const step_description = reactive([{ step: 'Bước 1', description: '', image: '' }]);
let count = 2;

function showModal() {
  isModalOpen.value = true;
}

function hideModal() {
  isModalOpen.value = false;
}

const uploadFile = (index) => (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const base64Data = reader.result.split(',')[1];
    console.log('Base64 Data:', base64Data);

    if (!step_description[index]) {
      step_description[index] = { step: 'Bước ' + count++, description: '', image: base64Data };
    } else {
      step_description[index].image = base64Data;
    }
  };
};

const addInput = () => {
  step_description.push({ step: 'Bước ' + count++, description: '', image: '' });
};

const removeInput = (index) => {
  step_description.splice(index, 1);
  count--;
};

const addItem = () => {
  const newItem = {
    title: title.value,
    content: content.value,
    step_descriptions: step_description
  };

  item.push(newItem);

  // Reset the form values and close the modal
  title.value = '';
  content.value = '';
  step_description.splice(0, step_description.length);
  hideModal();
};
</script>