<template>
  <div class="container mx-auto block md:flex mb-12 md:mb-24">
    <h2
      class="font-display text-2xl md:text-4xl text-gray-500 tracking-tight uppercase md:w-1/3 mb-4"
    >
      <Slashes />
      {{ title }}
    </h2>
    <div class="md:w-2/3">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>
