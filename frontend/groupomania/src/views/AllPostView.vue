<template>
  <div class="getAllPostHTML">
    <!-- <h1>Bonjour AllPostView</h1> -->
    <div>
      <HeaderComponent />
    </div>
    <div>
     
      <CreatePostComponent />
    </div>
     <ul>
        <li v-for="post in allpostmsgs" :key="post.id">
            {{post.id}}
            {{post.content}}
        </li>
      </ul>
    <div>
     <OnePost v-for="post in allpostmsgs" :key="post.id" :content="post.content" :image="post.image" :UserId="post.UserId" :createdAt="post.createdAt" :id="post.id" />
     <!-- <OnePost content="Bonjour je suis le contenu n°2" image="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg" UserId="username :Hugo" createdAt="2022-06-08" id="id: n°2"  />
     <OnePost content="Bonjour je suis le contenu n°2" image="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg" UserId="username :Corinne" createdAt="2022-06-08" id="id: n°3"  /> -->
    </div>
  </div>

</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import OnePost from '../components/OnePost.vue';
import CreatePostComponent from '../components/CreatePostComponent.vue';
import axios from 'axios';

export default {
  name: 'AllPost',
  components: {
    HeaderComponent,
    OnePost,
    CreatePostComponent,
},
 data() {
    return {
      allpostmsgs: "Toto",
    }
  },
  mounted() {
    this.allpostmsgs = "Bonjour Samy"
    axios.get('http://localhost:3000/get-all-posts')
    .then(response => {
      this.allpostmsgs = response.data;
      console.log(this.allpostmsgs)
    })
    .catch(error => console.log(error));
  },

}
</script>

<style scoped>
</style>