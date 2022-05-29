<template>
    <div class="getAllPostHTML">
        <h1>Bonjour AllPostView</h1>
        <div> <HeaderComponent /> </div>
        <div>createpostcomponent</div>
        <div><OnePost content="Bonjour je suis le contenu n°1"/></div>
        <div><OnePost content="Bonjour je suis le contenu n°2"/></div>
        <div><OnePost content="Bonjour je suis le contenu n°3"/></div>
        <div><OnePost content="Bonjour je suis le contenu n°4"/></div>
    </div>
    
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import OnePost from '../components/OnePost.vue';


  export default {
      name: 'AllPost',
      components: {
    HeaderComponent,
    OnePost
}
  }
</script>

<style scoped>
</style>