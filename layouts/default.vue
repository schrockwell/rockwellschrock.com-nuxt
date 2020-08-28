<template>
  <div class="px-2 md:px-0">
    <div class="container mx-auto flex justify-between items-center pb-4 pt-2">
      <span
        class="font-display tracking-tight text-3xl md:text-4xl uppercase text-gray-700"
      >
        <nuxt-link to="/" class="hover:text-orange-500 transition duration-300"
          >Rockwell Schrock</nuxt-link
        >
      </span>
      <div class="hidden md:block">
        <ul class="flex space-x-4">
          <li>
            <nuxt-link
              to="/cv"
              class="text-gray-600 hover:text-orange-500 transition duration-300"
              >CV</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              v-if="false"
              to="/projects"
              class="text-gray-600 hover:text-orange-500 transition duration-300"
              >Projects</nuxt-link
            >
          </li>

          <li>
            <a
              class="text-gray-600 hover:text-orange-500 transition duration-300"
              href="https://dnc.show"
              >Podcast</a
            >
          </li>
        </ul>
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "bg-gray-200 text-gray-800"
    }
  }
};
</script>
