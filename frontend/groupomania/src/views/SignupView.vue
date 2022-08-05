<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="px-5 ms-xl-4">
        <i
          class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
          style="color: #709085"
        ></i>
        <span class="h1 fw-bold mb-0"
          ><img src="../assets/logo.png" class="logo-gp" alt="..."
        /></span>
      </div>

      <div
        class="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
      >
        <form style="width: 23rem">
          <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
            Inscription
          </h3>

          <div class="form-outline mb-4">
            <input
              type="text"
              id="username"
              class="form-control form-control-lg"
              v-model="username"
            />
            <label class="form-label" for="fullname"> Nom d'Utilisateur</label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="email"
              id="email"
              class="form-control form-control-lg"
              v-model="email"
            />
            <label class="form-label" for="email">Adresse E-mail</label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              id="password"
              class="form-control form-control-lg"
              v-model="password"
            />
            <label class="form-label" for="password"> Mot de passe</label>
          </div>
        <div v-if="formError" class="formError">
         pomme {{formError}}
        </div>
        
          <div class="pt-1 mb-4">
            <ButtonComponent
              label="S'inscrire"
              class="buttoncreatecomponent"
              @click-btn="onCreateUser"
            />
          </div>

          <p class="forgot-password text-right">
            Déjà enregistré
             <router-link :to="{ name: 'login' }"> s'identifier ?</router-link>
          </p>
        </form>
      </div>
    </div>
    <!-- <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
          alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
      </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>
<script>
// import { Axios } from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";
import axios from 'axios';

export default {
  name: "CreateUser",
  components: {
    ButtonComponent,
  },
  props: {},

  data() {
    return{
       username: '',
       email: '',  //fonction qui retourne un obj
       password: '',
       formError: null,
    }
   
  },

  methods: {
    onCreateUser: function() {
      const User = {
        "username": this.username,
        "email": this.email,
        "password": this.password,
      }
      console.log(User)
      alert("Nouveau compte créer");
        axios.post("http://localhost:3000/api/auth/signup", User, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            console.log(User)
            // this.$router.push("/signup");
          })
          .catch((error) => {
            console.log(error);
            this.formError = "Erreur: " + error.response.data.error;
          });
          
    },
  },
};
</script>
<style scoped>
.formError{
  color: red;
}
</style>