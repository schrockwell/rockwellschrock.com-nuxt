<template>
  <div>
    <a v-if="href" class="text-link text-xl md:text-2xl font-display" :href="href">{{ title }}</a>
    <nuxt-link v-if="to" class="text-link text-xl md:text-2xl font-display" :to="to">{{ title }}</nuxt-link>
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  props: ["href", "title", "to"],
};
</script>
