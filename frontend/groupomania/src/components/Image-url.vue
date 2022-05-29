<template>
  <img :src="url" width="120" />
</template>

<script>
export default {
  name: "Image-url",
  props: {
    url: String,
  },
};
</script>
