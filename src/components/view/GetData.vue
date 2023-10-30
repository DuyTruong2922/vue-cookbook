<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div v-for="(item,index) in items" :key="item.id" class="container">

        <div class="accordion-header"  @click="collapse(index)"> <!--CLICK THIS-->
          <h6 class="accordion-heading" >📖{{ item.title }}</h6>
        </div>

           <div class="accordion-content" v-if="item.isCollapsed" > <!--TO SHOW THIS-->
            <button @click="deleteItem(item.id)">Bỏ</button>
            <UpdateForm/>
              {{ item.content }} 
              <br>
              <h2>The steps</h2>
              
              <div v-for="item in item.step_descriptions" :key="item.id">
                {{ item.step }}
                <img :src="item.image" />
                {{ item.description }}
              </div>
           </div>
      <button @click="passData(item.id, item)">pass data</button>
          
      </div> 

  </div>

</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { deleteItem } from '../js/DeleteFunction'
  import { updateItem } from '../js/UpdateFunction'
  import UpdateForm from './UpdateForm.vue'



  const items = ref([]);


      const fetchData = async () => {
        try {
          const response = await axios.get(process.env.VUE_APP_API_MOCKAPI);
          items.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };

      onMounted(fetchData);
  


     function collapse(index) {
      this.items[index].isCollapsed = !this.items[index].isCollapsed;
    }








    const passData = (id,item)  => {
      updateItem.push(item)
      console.log(id,updateItem);
      // updatePostById(id);
    };

    


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: 0;
  padding: 100px 25px;
  display: flex;
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.accordion-header {
  width: 75%;
  background-color: #e7e7e7;
  margin-top: 0.2%;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  transition: padding .2s cubic-bezier(.25,.46,.45,.94);
  display: flex;
  border-top-left-radius: 40px;
}
.accordion-heading {
  color: #1f1b1a;
  margin-top: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2em;
  margin-bottom: 0;
  margin-right: 25px;
  font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,Oxygen,Fira Sans,Droid Sans,sans-serif;
}

.accordion-content {
  width: 75%;
  background-color: #e7e7e7;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 24px;
  padding-right: 24px;
  /* display: none; */
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

.accordion-content select {
  max-width: 70%;
}
.accordion-content button {
  margin-left: 1%;
}

.accordion-header:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: white;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}
</style>
