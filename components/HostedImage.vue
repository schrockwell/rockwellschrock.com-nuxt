<template>
  <img :src="src" />
</template>

<script>
export default {
  props: ["path"],
  computed: {
    src() {
      return `https://rockwellschrock-com.s3.amazonaws.com/images/${this.path}`;
    }
  }
};
</script>
