<script>
export default {
  name: "OnePost",
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
    <div>OnePost : {{content}}</div>
</template>

<style scoped>
</style>
