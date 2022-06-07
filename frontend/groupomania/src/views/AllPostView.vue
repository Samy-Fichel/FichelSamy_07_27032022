<template>
  <div class="getAllPostHTML">
    <!-- <h1>Bonjour AllPostView</h1> -->
    <div>
      <HeaderComponent />
    </div>
    <div>createpostcomponent</div>
    <div>
     <OnePost content="Bonjour je suis le contenu n°1" image="https://cdn.pixabay.com/photo/2022/02/20/13/56/red-throated-barbet-7024605_1280.jpg" UserId="username:Samy"  id="id: n°1" />
     <OnePost content="Bonjour je suis le contenu n°2" image="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg" UserId="username :Hugo" id="id: n°2"  />
     <OnePost content="Bonjour je suis le contenu n°2" image="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg" UserId="username :Hugo" id="id: n°3"  />
    </div>
  </div>

</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import OnePost from '../components/OnePost.vue';


export default {
  name: 'AllPost',
  components: {
    HeaderComponent,
    OnePost,
}
}
</script>

<style scoped>

</style>