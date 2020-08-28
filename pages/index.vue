<template>
  <div>
    <Hero>Full-stack web and iOS developer. Podcaster. Maker of things.</Hero>

    <IndexSection title="Current Projects">
      <div class="space-y-4 md:space-y-8">
        <IndexProject
          title="Remote Ham Radio"
          href="https://www.remotehamradio.com/"
          >Get on the air from anywhere</IndexProject
        >

        <IndexProject
          title="SOTA Goat for iOS"
          href="https://www.ww1x.com/sotagoat/"
          >Utility for portable radio operators</IndexProject
        >

        <IndexProject
          title="Waveguide for iOS"
          href="https://www.ww1x.com/waveguide/"
          >Radio propagation utility</IndexProject
        >

        <IndexProject title="Does Not Compute" href="https://dnc.show/"
          >Weekly development podcast</IndexProject
        >
      </div>
    </IndexSection>

    <IndexSection title="Recent Projects">
      <IndexProject title="METAR Map" to="projects/metar-map"
        >Weather at a glance</IndexProject
      >
    </IndexSection>

    <IndexSection title="Experience">
      <IndexProject title="Curriculum Vitae" to="cv" />
    </IndexSection>

    <IndexSection title="Social">
      <IndexProject title="Twitter" href="https://twitter.com/schrockwell" />
      <IndexProject title="YouTube" href="https://youtube.com/schrockwell" />
      <IndexProject title="GitHub" href="https://github.com/schrockwell" />
    </IndexSection>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rockwell Schrock"
    };
  }
};
</script>

<style></style>
