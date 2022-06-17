<template>
    <!-- <h1>Bonjour AllPostView</h1> -->
    <div class="createpost">
      <!-- <label for="story">Tell us your story:</label> -->
      <input type="file" accept="image/png, image/jpeg" class="" >
      <ul>
        <li v-for="post in allpostmsgs" :key="post.id">
            {{post.id}}
            {{post.content}}
        </li>
      </ul>
      <textarea id="story" name="story" rows="4" cols="63">
        Que voulez-vous dire, (nom) ? 
      </textarea>
      <ButtonComponent label="Publier" class="buttoncreatecomponent" @click-btn="onCreatePost"/>
    </div>
</template>

<script>
// import HeaderComponent from '../components/HeaderComponent.vue';
// import OnePost from '../components/OnePost.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import axios from 'axios';

export default {
  name: "CreatePost",
  components: {
    ButtonComponent,
  },
  props: {

  },
  methods:{
    onCreatePost(){
      alert("Nouveau Post créé");
    }
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
  
};

</script>

<style scoped>
.createpost
{
    display: flex;
    justify-content: center; 
    align-items: center;
    background: #f2f2f5;
    margin-top: 2em;
    padding: 1em;
}

textarea{
  text-align: center;
}
</style>