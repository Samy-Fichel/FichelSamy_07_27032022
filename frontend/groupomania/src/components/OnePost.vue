<script>
import ImageUrl from './ImageUrl.vue';
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";
export default {
  name: "OnePost",
  components: {
    ImageUrl,
    ButtonComponent

  },
  props: {
    id: {
      type: Number,
      required: false
    },
    image: {
      type: String,
      required: false
    },

    content: {
      type: String,
      required: false
    },
    createdAt: {
      type: String,
      required: false
    },
    updatedAt: {
      type: Date,
      required: false
    },
    UserId: {
      type: Number,
      required: false
    },
    PostsId: {
      type: Number,
      required: false
    },
    Likes: {
      type: Array,
    },
  },
  data() {
    return {
      newcontent: this.content,
      userIdLike: this.UserId,
      postIdLike: this.PostsId,
      newimage: this.image
    }
  },
  methods: {
    OnFileSeletedImg(event) {
      console.log(event);
      this.newimage = event.target.files[0];
    },

    deletePost() {
      const data = {
        id: this.id
      }
      axios.delete(`http://localhost:3000/api/auth/post/${this.id}`, data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response);
          this.$emit('delete'); 
        })
        .catch(function (error) {
          console.log(error.response)
        })
    },
    
    modifyPost() {
      const formDFront = new FormData(); {
       formDFront.append("image", this.image)
       }

      console.log("this.id", this.id)
      const data = {
        content: this.newcontent,
        image: this.newimage 
        
      }
      axios.put(`http://localhost:3000/api/auth/post/${this.id}`, data, { 
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
       })
        .then(response => {
          console.log(response);
          this.$emit('update'); 
        })
        .catch(function (error) {
          console.log(error.response)
        })
    },

    likePost() {
      const data = {
        PostId: this.id,
        UserId: this.UserId,
      }
      console.log
      axios.post(`http://localhost:3000/api/auth/post/${this.id}/like`, data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response);
          // {Posts.Likes.length}
          this.$emit('like'); 
        })
        .catch(function (error) {
          console.log(error.response)
          alert('erreur lors du like veuillez réessayer')
        })
    },

    likeExist() {
      const userId = localStorage.getItem("userId");
      let likeExist = false;

      this.Likes.forEach(like => {
        if(like.UserId == userId){
          likeExist = true
        }
      });
      return likeExist;
    },

    canEdit() {
      const isAdmin = localStorage.getItem("isAdmin");
      const userId = localStorage.getItem("userId");
      const postUserId = this.UserId;
      if(isAdmin === "true" || userId == postUserId){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>

<template>
  <div class="container-card mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">

    <div class="my-3 p-3 py-3">{{ content }}</div>
    <div class=" card-post color-card box-shadow mx-auto">
      <ImageUrl :url="image" class="img-onepost" />
    </div>
    <div class="buttonsComponent">
      <ButtonComponent v-if="canEdit()" label="Delete" name="Delete" class="buttoncreatecomponent" @click-btn="deletePost" />
      <button v-if="canEdit()" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Modify
      </button>
      <div class="like-post-container">
          <ButtonComponent v-if="likeExist()" label="" name="like" class="liked fas fa-heart fa-2x"/>
          <ButtonComponent v-else label="" name="like" class="fas fa-heart fa-2x" @click-btn="likePost" />
            <span>{{Likes.length}}</span>  
      </div>
    </div>
   

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modifié un post</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="" action="/images" method="PUT" enctype="multipart/form-data">
              <input type="file" id="image" name="image"  @change="OnFileSeletedImg" />
              <textarea id="post-textarea" v-model="newcontent" name="post-textarea" rows="3" cols="50">
        Que voulez-vous dire, (nom) ? 
    </textarea>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <ButtonComponent label="Modify" v-model="newcontent" name="Modify" class="buttoncreatecomponent" @click-btn="modifyPost" />
          </div>
        </div>
      </div>
      </div>
    </div>

</template>

<style scoped>
pb-3,
.py-3 {
  padding-bottom: 1rem !important;
  font-size: 20px;
  background-color: #4E5166;
  color: white;
  width: 125%;
  border-radius: 15px 15px 0px 0px;
}

.container-card {
  background-color: #e5e3e3;
    width: 100%;
    max-width: 500px;
    margin: auto;
    margin-top: 3%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    padding: 10px;
}

.card-post {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-card {
  background-color: #4E5166;
}

.username-id {
  background-color: #e54d26;
  width: 140px;
  height: 25px;
  border-radius: 20px;
}

.userid {
  color: blue;
}

.img-onepost {
  width: 70%;
  display: flex;
  justify-content: center;
  border-radius: 50px 50px 0px 0px;
}

.name-card-user-created {
  display: flex;
  flex-direction: column;
}

.username-id {
  margin: 1.5em;
}
.buttonsComponent{
  display: flex;
  margin-top: 20px;
}
.liked{
  color:blue;
}
</style>