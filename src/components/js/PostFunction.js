import axios from 'axios';
import { reactive } from 'vue'

export const item = reactive([]);


export const pushData = async () => {

            await axios.post(process.env.VUE_APP_API_MOCKAPI, item[0])
            .then(function (response) {
                console.log(response);
                alert("da post")
                item[0] = '';
            })
            .catch(function (error) {
                console.log(error);
            });
            
      };

