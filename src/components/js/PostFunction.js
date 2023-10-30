import axios from 'axios';
import { reactive } from 'vue'

export const item = reactive({});


export async function pushData(){
    
            await axios.post(process.env.VUE_APP_API_MOCKAPI, item.value)
            .then(function (response) {
                console.log(response);
                alert("da post")
            })
            .catch(function (error) {
                console.log(error);
            });
            
      }

