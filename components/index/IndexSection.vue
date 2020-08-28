<template>
  <div class="container mx-auto block md:flex mb-12 md:mb-16">
    <h2
      class="font-display text-2xl md:text-4xl text-gray-500 tracking-tight uppercase md:w-1/2 mb-2"
    >
      <Slashes />
      {{ title }}
    </h2>
    <div class="md:w-1/2">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>