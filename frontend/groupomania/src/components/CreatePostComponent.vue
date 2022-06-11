<template>
    <!-- <h1>Bonjour AllPostView</h1> -->
    <div class="createpost">
      <!-- <label for="story">Tell us your story:</label> -->
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
  }
};

</script>

<style scoped>
.createpost
{
    display: flex;
    justify-content: center; 
    background: blue;
    margin-top: 2em;
    padding: 1em;
}

textarea{
  text-align: center;
}
</style>