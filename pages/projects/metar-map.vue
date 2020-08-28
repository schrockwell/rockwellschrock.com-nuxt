<template>
  <div>
    <Hero>METAR Map</Hero>

    <div class="container mx-auto">
      <HostedImage
        path="metar-map/finished.jpeg"
        class="mx-auto md:w-2/3 shadow-lg rounded-lg mb-12 md:mb-24"
      />

      <div class="font-display text-2xl mb-12">
        <a class="text-link" href="https://imgur.com/a/z6Rmb7u">
          Photo Gallery
        </a>
        <span class="text-gray-400 mx-2 tracking-tightest">//</span>
        <a class="text-link" href="https://github.com/schrockwell/metar_map">
          Source on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rockwell Schrock // METAR Map"
    };
  }
};
</script>
