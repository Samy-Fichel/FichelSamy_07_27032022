<template>
  <div class="getAllPostHTML">
    <div>
      <HeaderComponent />
    </div>
    <div>
      <CreatePostComponent @create="onCreatePost" /> 
    </div>
    <div>
      <OnePost
        v-for="post in allpostmsgs"
        :key="post.id"
        :content="post.content"
        :image="post.image"
        :createdAt="post.createdAt"
        :UserId="post.UserId"
        :id="post.id"
        :like="post.like"
      />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import OnePost from "../components/OnePost.vue";
import CreatePostComponent from "../components/CreatePostComponent.vue";
import axios from "axios";

export default {
  name: "AllPost",
  components: {
    HeaderComponent,
    OnePost,
    CreatePostComponent,
  },
  data() {
    return {
      allpostmsgs: "Toto",
     
    };
  },
  methods: {
    onCreatePost: function () {
      axios
        .get("http://localhost:3000/api/auth/post", {
        })

        .then((response) => {
          this.allpostmsgs = response.data.reverse();
          console.log(this.allpostmsgs);
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.allpostmsgs = "Bonjour Samy";
    console.log('getAllPosts', localStorage.getItem('token'));
    axios
      .get("http://localhost:3000/api/auth/post", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
    
      .then((response) => {
        this.allpostmsgs = response.data.reverse();
        console.log(this.allpostmsgs);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped></style>
