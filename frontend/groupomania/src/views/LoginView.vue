<template>
<section class="vh-100">
  <div class="container-fluid">
        <div class="px-5 ms-xl-4">
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
            const token = response.data.token;
            const userId = response.data.userId;
            // const userId = response.data.userId;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);
            // localStorage.setItem("userId", JSON.stringify(userId));
            console.log("Je suis le token",localStorage.token);
            console.log('localStoragegetitem', localStorage.getItem('token'));
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
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