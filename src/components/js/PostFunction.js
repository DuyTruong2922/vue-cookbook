import { item } from './item.js';
import axios from 'axios';


export const pushData = async () => {

            await axios.post(process.env.VUE_APP_API_MOCKAPI, item[0])
            .then(function (response) {
                console.log(response);
                alert("da post")
            })
            .catch(function (error) {
                console.log(error);
            });
            
      };

