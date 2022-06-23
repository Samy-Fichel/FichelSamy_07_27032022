<template>
  <button class="btn btn-secondary btn-lg" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    label: String,
  },
  methods: {
    onClick() {
      this.$emit('click-btn');
    }
  }
};
</script>

<style scoped>
.btn {
   margin: 2em;;
}
</style>
