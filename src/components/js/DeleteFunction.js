import axios from 'axios';


export const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`${process.env.VUE_APP_API_MOCKAPI}/${id}`);
      // Handle successful response
      alert("deleted")
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };