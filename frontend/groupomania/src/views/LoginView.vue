<template>
<section class="vh-100">
  <div class="container-fluid">
        <div class="px-5 ms-xl-4">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
          <span class="h1 fw-bold mb-0"><img src="../assets/logo.png" class="logo-gp" alt="..." /></span>
        </div>
        
        <div class="d-flex justify-content-center align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style="width: 23rem;">

            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Connexion</h3>

            <div class="form-outline mb-4">
              <input type="email" id="email" v-model="email" class="form-control form-control-lg" />
              <label class="form-label" for="password">Adresse E-Mail</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="password" v-model="password" class="form-control form-control-lg" />
              <label class="form-label" for="password">Mot de passe</label>
            </div>

            <div class="pt-1 mb-4">
               <ButtonComponent label="Login" class="buttoncreatecomponent" @click-btn="onLoginUser"/>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Mot de passe oublié ?</a></p>
            <p>Vous n'avez pas de compte ? <router-link :to="{ name: 'signup' }">  Inscrivez-vous ici</router-link></p>  
          </form>
        </div>
      </div>
</section>
</template>
<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import axios from 'axios';

export default {
  name: "LoginUser",
  components: {
    ButtonComponent,
  },
  props: {},

  data() {
    return{
       email: '',  //fonction qui retourne un obj
       password: '',
    }
   
  },

  methods: {
    onLoginUser: function() {
      const User = {
        "email": this.email,
        "password": this.password,
      }
      console.log(User)
        axios.post("http://localhost:3000/api/auth/login", User, {
          headers: {
            "Content-Type": "application/json",
          },
          body: User
        })
          .then((response) => {
            console.log("Je suis le token",response.data.token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
            alert("Vous êtes connectée");
            console.log(User)
            this.$router.push("/home");
          })
          .catch((error) => console.log(error));
    },
  },
};

</script>
<style scoped>

</style>