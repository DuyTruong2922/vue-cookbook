import axios from 'axios';
import { reactive } from 'vue';

// export const updateItem = reactive([]) ;
export const updateObj = reactive({}) ;


  export async function updatePostById(id) {
    try {
      const response = await axios.put(`${process.env.VUE_APP_API_MOCKAPI}/${id}`, updateObj.value);
      // Handle successful response
      alert("updated")
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }