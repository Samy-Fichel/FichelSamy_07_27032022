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
    //*********************************START LIKES
    likes: { 
      type: Number, required: false, default: 0 
    },
    dislikes: { 
      type: Number, required: false, default: 0 
    },
    usersLiked: { 
      type: [String], required: false  
    },
   usersDisliked: {
     type: [String], required: false
    },
  //************************************END LIKES
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
  data() {
    return{
      newcontent: this.content
    }
  },

   methods: {
    deletePost() {
        const data = {
          id: this.id
        }
        axios.delete(`http://localhost:3000/api/auth/post/:id` , data)
             .then(response => {
                 console.log(response);
             })
             .catch(function (error) {
                console.log(error.response)
             })
    },
    modifyPost(){
      const headers = {
        "Content-Type": "multipart/form-data",
      }
      const data = {
        content: this.newcontent,
        // image: this.image[0]
      }
      axios.put(`http://localhost:3000/api/auth/post/${this.id}`, data, {headers:headers})
      .then(response => {
                 console.log(response);
             })
             .catch(function (error) {
                console.log(error.response)
             })
    },
}

};
</script>

<template>
<html>
<head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
      crossorigin="anonymous">
</head>
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
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Modify
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modifié un post</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form class="" action="/images" method="PUT" enctype="multipart/form-data">
    <!-- <label for="story">Tell us your story:</label> -->
    <input type="file" id="image" name="image"/>
    <!-- <input name="fileimg" type="file" accept="image/png, image/jpeg" class="" > -->
    <textarea id="post-textarea" v-model="newcontent" name="post-textarea" rows="3" cols="50">
        Que voulez-vous dire, (nom) ? 
    </textarea >

  </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <ButtonComponent
          label="Modify"
          name="Modify"
          class="buttoncreatecomponent"
          @click-btn="modifyPost"
        />
      </div>
    </div>
  </div>
</div>
      
     <!-- <button class="btn btn-danger btn-sm" @click="deletePost(post.id)">Delete</button> -->
     <!-- <ButtonComponent class="" label="Delete" name="Delete" title="supprimer le post" @click="deletePost(post.id)"/> -->
      <!-- <ButtonComponent
      label="Delete"
      name="Delete"
      class="buttoncreatecomponent"
      @click-btn="onDeletePost"
    /> -->
   
  </div>
</html>

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
