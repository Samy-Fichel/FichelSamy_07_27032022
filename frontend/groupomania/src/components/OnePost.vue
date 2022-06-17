<script>
import ImageUrl from './ImageUrl.vue';

export default {
  name: "OnePost",
  components: {
    ImageUrl,
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
      type: Date,
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

  },

};
</script>

<template>
  <div class="container-card mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div class="name-card-user-created">
      <div class="userid">
        <p class="username-id">{{ UserId }}</p>
      </div>
      <div class="userid">
        <p class="username-id">{{ createdAt }}</p>
      </div>
    </div>

    <div class="my-3 p-3 py-3">{{ content }}</div>
    <div class=" card-post color-card box-shadow mx-auto">
      <ImageUrl :url="image" class="img-onepost" />
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
  height: 130px;
  border-radius: 15px 15px 0px 0px;
}

.container-card {
  background-color: #e5e3e3;
  width: 40%;
  max-width: 100%;
  margin: auto;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50px 50px 0px 0px;
  padding: 10%;
}

.card-post {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50px 50px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #FD2D01;

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
.name-card-user-created{
  display: flex;
}
.username-id{
  margin: 1.5em;
}
</style>
