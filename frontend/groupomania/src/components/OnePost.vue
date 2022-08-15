<script>
import ImageUrl from './ImageUrl.vue';
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  name: "OnePost",
  components: {
    ImageUrl,
    ButtonComponent
    
},
  props: {
    id: {
      type: Number,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    createdAt: {
      type: String,
      required: false
    },
    updatedAt: {
      type: Date,
      required: false
    },
    UserId: {
      type: Number,
      required: false
    },

  },

   methods: {
    deletePost() {
        const headers = { 
           Authorization: `Bearer ${this.$token}`
        }
        const data = {
          id: this.id
        }
        axios.delete(`http://localhost:3000/api/auth/post/:id` , {headers, data})
             .then(response => {
                 console.log(response);
             })
             .catch(function (error) {
                console.log(error.response)
             })
    }
},

};
</script>

<template>
  <div class="container-card mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div class="name-card-user-created">
      <div class="userid">
        <p class="username-id">{{ UserId }}</p>
      </div>
      <div class="userid">
        <p class="username-id">{{ createdAt }}</p>
      </div>
    </div>

    <div class="my-3 p-3 py-3">{{ content }}</div>
    <div class=" card-post color-card box-shadow mx-auto">
      <ImageUrl :url="image" class="img-onepost" />
    </div>
      <!-- <button class="btn btn-danger btn-sm" @click="deletePost">Delete</button> -->
       <ButtonComponent
      label="Delete"
      name="Delete"
      class="buttoncreatecomponent"
      @click-btn="deletePost"
    />
     <!-- <button class="btn btn-danger btn-sm" @click="deletePost(post.id)">Delete</button> -->
     <!-- <ButtonComponent class="" label="Delete" name="Delete" title="supprimer le post" @click="deletePost(post.id)"/> -->
      <!-- <ButtonComponent
      label="Delete"
      name="Delete"
      class="buttoncreatecomponent"
      @click-btn="onDeletePost"
    /> -->
   
  </div>


</template>

<style scoped>
pb-3,
.py-3 {
  padding-bottom: 1rem !important;
  font-size: 20px;
  background-color: #4E5166;
  color: white;
  width: 125%;
  height: 130px;
  border-radius: 15px 15px 0px 0px;
}

.container-card {
  background-color: #e5e3e3;
  width: 40%;
  max-width: 100%;
  margin: auto;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50px 50px 0px 0px;
  padding: 10%;
}

.card-post {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50px 50px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #FD2D01;

}

.color-card {
  background-color: #4E5166;
}

.username-id {
  background-color: #e54d26;
  width: 140px;
  height: 25px;
  border-radius: 20px;
}

.userid {
  color: blue;
}

.img-onepost {
  width: 70%;
  display: flex;
  justify-content: center;
  border-radius: 50px 50px 0px 0px;
}
.name-card-user-created{
  display: flex;
}
.username-id{
  margin: 1.5em;
}
</style>
