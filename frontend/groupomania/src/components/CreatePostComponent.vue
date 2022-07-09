<template>
  <!-- <h1>Bonjour AllPostView</h1> -->
  <form class="createpost">
    <!-- <label for="story">Tell us your story:</label> -->
    <input type="file" id="userfile" name="userfile" />
    <!-- <input name="fileimg" type="file" accept="image/png, image/jpeg" class="" > -->
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
// import HeaderComponent from '../components/HeaderComponent.vue';
// import OnePost from '../components/OnePost.vue';
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
    }
   
  },
  
  post: {
    id: null,
    image: "",
    createdAt: "",
    SelectedImg: "",
    content: "",
  },
  methods: {
    OnFileSeletedImg(event) {
      this.SelectedImg = event.target.files[0];
    },

    onCreatePost() {
      console.log("content", this.content) 
      const formD = new FormData();
      formD.append("content", this.content)
      formD.append("image", this.OnFileSeletedImg)

      axios
        .post("http://localhost:3000/create", formD, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          // this.$router.push("/create");
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
