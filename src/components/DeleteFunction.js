// import { item } from './item.js';
import axios from 'axios';


export const deleteData =  async () => {

            await axios.delete(process.env.VUE_APP_API_MOCKAPI[0])
            .then(function (response) {
                console.log(response);
                alert("ok da xoa")
            })
            .catch(function (error) {
                console.log(error);
            });

      };