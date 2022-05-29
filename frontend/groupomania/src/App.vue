/* eslint-disable vue/no-multiple-template-root */

<script>
// import HelloWorldVue from "./components/HelloWorld.vue";
// import TheMenu from "./components/TheMenu.vue";
import TheAllPostView from "./views/AllPostView.vue";

export default {
  name: "App",
  components: {
    // HelloWorld: HelloWorldVue,
    // TheMenu,
    TheAllPostView
  
},
};
</script>

<template>
	<div id="app">
  <TheAllPostView />
  
		<!-- <nav>
			<TheMenu />
			<a href="/about">À propos</a>
			<a href="/contact">Contact</a>
		</nav>
		<p>Bienvenue sur notre page d'<TheMenu /></p>
    <TheMenu />

    <TheAllPost />

    <HelloWorld colorText="red" name="Samy" image="https://larbredeaaz.fr/files/logo/logo.png" />
    <HelloWorld colorText="green" name="Arthur" 
      image="https://assets.letemps.ch/sites/default/files/styles/original/public/media/2020/08/16/file7bvv3g0v9rdyivvq9bw.jpg?itok=t7OLSXC_" /> -->
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
