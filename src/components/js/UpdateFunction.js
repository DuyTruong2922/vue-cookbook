import axios from 'axios';
import { reactive } from 'vue';

export const updateItem = reactive([]) ;

  export const updatePostById = async (id) => {
    try {
      const response = await axios.put(`${process.env.VUE_APP_API_MOCKAPI}/${id}`, updateItem[0]);
      // Handle successful response
      alert("updated")
      updateItem[0]= '';
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };