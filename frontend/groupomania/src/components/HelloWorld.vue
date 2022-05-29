<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div :style="`color: ${colorText}`">Hello {{ name }}</div>
    <div>
      <Button label="Inscription" />
    </div>

  </div>


</template>

<script>
import Button from "./Button-B.vue";

export default {
  name: "HelloWorld",
  components: {
    Button: Button,
  },
  props: {
    name: String,
    image: String,
    colorText: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
