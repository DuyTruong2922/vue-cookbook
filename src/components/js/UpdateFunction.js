import axios from 'axios';
import { reactive } from 'vue';

export const updateItem = reactive([]) ;

const post = reactive({
    created_at: "2072-11-28T20:02:05.151Z",
    updated_at: 1698391409,
    title: "vue post change",
    content: "vue",
    rating: "rating 1",
    step_descriptions: [
      {
        step: "Bước 1",
        description: "v",
        image: ""
      },
      {
        step: "Bước 2",
        description: "u",
        image: ""
      }
    ],
    id: "1"
  });

  export const updatePostById = async (id) => {
    try {
      const response = await axios.put(`${process.env.VUE_APP_API_MOCKAPI}/${id}`, post);
      // Handle successful response
      alert("updated")
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };