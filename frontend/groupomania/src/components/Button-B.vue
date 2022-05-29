<template>
  <span class="button">{{ label }}</span>
</template>

<script>
export default {
  name: "Button-B",
  props: {
    label: String,
  },
};
</script>

<style scoped>
.button {
  padding: 5px;
  background-color: #eeeeee;
  border-radius: 4px;
}
</style>
