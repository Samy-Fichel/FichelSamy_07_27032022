<template>

  <form class="createpost" action="/images" method="POST" enctype="multipart/form-data">
    <input type="file" id="image" name="image" @change="OnFileSeletedImg"/>
    <textarea
      id="post-textarea"
      name="post-textarea"
      rows="4"
      cols="63"
      v-model="content"
    >
        Que voulez-vous dire, (nom) ? 
      </textarea
    >
    <ButtonComponent
      label="Publier"
      name="publier"
      class="buttoncreatecomponent"
      @click-btn="onCreatePost"
    />
  </form>
</template>

<script>
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  name: "CreatePost",
  components: {
    ButtonComponent,
  },

  props: {},

  data() {
    return{
       content: 'test',  //fonction qui retourne un obj
       image: '',
       UserId: 1,
    }
   
  },
  
  post: {
    id: null,
    UserId: null,
    createdAt: "",
    content: "",
    image: "", 
  },
  methods: {
    OnFileSeletedImg(event) {
      console.log(event);
      this.image = event.target.files[0];
      
    },

    onCreatePost() {
      console.log("content", this.content) 
      console.log("image", this.image)
      const formD = new FormData();
       if (this.image !== null){
       formD.append("UserId", this.UserId)
       formD.append("image", this.image)
       formD.append("content", this.content)
       } else {
          formD.append("content", this.content);
          
       }
     
      axios
        .post("http://localhost:3000/api/auth/post", formD, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          this.$emit('create'); 
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.createpost {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f5;
  margin-top: 2em;
  padding: 1em;
}

textarea {
  text-align: center;
}
</style>
