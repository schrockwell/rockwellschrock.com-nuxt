<template>
  <div class="border-t-4 border-gray-400 pt-2">
    <div class="flex w-100 md:mb-2 mb-1 items-center">
      <div class="flex-grow">
        <h4 v-if="subtitle" class="text-gray-500 font-medium">{{ subtitle }}</h4>
        <h3 class="text-h3">{{ title }}</h3>
      </div>
      <div
        v-if="date"
        class="flex-shrink-0 text-gray-500 text-2xl md:text-3xl font-display ml-4"
      >{{ date }}</div>
    </div>

    <slot />
  </div>
</template>
<script>
export default {
  props: ["title", "subtitle", "date"],
};
</script>

<style>
</style>