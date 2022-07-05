<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign Up</h3>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-control form-control-lg" />
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control form-control-lg" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control form-control-lg" />
      </div>
      <ButtonComponent
        label="S'inscrire"
        class="buttoncreatecomponent"
        @click-btn="onCreateUser"
      />
      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>
<script>
// import { Axios } from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  name: "CreatePost",
  components: {
    ButtonComponent,
  },
  props: {},
  methods: {
    onCrreateUser() {
      alert("Nouveau compte créer");
    //   Axios.post("http://localhost:3000/create")
    //     .then((response) => {
    //       console.log(response);
    //       this.$router.push("/create");
    //     })
    //     .catch((error) => console.log(error));
    },
  },
};
</script>
