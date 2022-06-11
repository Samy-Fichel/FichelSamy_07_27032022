<template>
  <button class="button" @click="onClick">{{ label }}</button>
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
.button {
  padding: 5px;
  background-color: #eeeeee;
  border-radius: 4px;
}
</style>
