<template>
  <div>
    <input type="file" multiple @change="handleFileInputChange">
    <div v-for="(step, index) in stepDescriptions" :key="index">
      <h3>{{ step.step }}</h3>
      {{ stepDescriptions }}
      <input type="text" v-model="step.description">
      <input type="file" @change="(event) => handleStepFileInputChange(event, index)">
      <div v-if="step.image">
        <img :src="step.image" alt="Preview">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const stepDescriptions = ref([
  {
    step: "Bước 1",
    description: "v",
    image: "",
  },
  {
    step: "Bước 2",
    description: "u",
    image: "",
  }
]);

const handleFileInputChange = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result;
      stepDescriptions.value[i].image = base64Data;
    };

    reader.readAsDataURL(file);
  }
};

const handleStepFileInputChange = (event, index) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const base64Data = reader.result;
    stepDescriptions.value[index].image = base64Data;
  };

  reader.readAsDataURL(file);
};
console.log(stepDescriptions);

// const postData = () => {
//   const payload = {
//     created_at: new Date().toISOString(),
//     updated_at: Math.floor(Date.now() / 1000),
//     title: "vue fisrt post",
//     content: "vue",
//     rating: "rating 1",
//     step_descriptions: stepDescriptions.value,
//     id: "1",
//   };

//   // Perform your HTTP POST request with the payload
//   console.log(payload);
// };
</script>