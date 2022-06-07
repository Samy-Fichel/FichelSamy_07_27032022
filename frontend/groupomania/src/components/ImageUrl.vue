<template>
  <img :src="url" width="120" />
</template>

<script>
export default {
  name: "ImageUrl",
  props: {
    url: String,
  },
};
</script>
