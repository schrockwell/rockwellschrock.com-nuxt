<template>
  <div>
    <Hero>{{ content.tagline }}</Hero>

    <IndexSection
      v-for="section in content.sections"
      :key="section.title"
      :title="section.title"
    >
      <div class="space-y-4 md:space-y-8">
        <IndexProject
          v-for="project in section.projects"
          :key="project.title"
          :title="project.title"
          :href="project.href"
          :to="project.to"
          >{{ project.subtitle }}</IndexProject
        >
      </div>
    </IndexSection>

    <IndexSection title="Social">
      <IndexProject
        v-for="social in content.socials"
        :key="social.title"
        :title="social.title"
        :href="social.href"
      />
    </IndexSection>

    <a rel="me" href="https://schrock.social/@rockwell" style="display: none">
      Mastodon
    </a>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.content.title,
    };
  },

  async asyncData({ $content }) {
    const content = await $content("index").fetch();
    return { content };
  },
};
</script>
