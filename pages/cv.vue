<template>
  <div>
    <Hero>Curriculum Vitae</Hero>

    <CvSection title="Skills">
      <div class="flex flex-wrap">
        <CvEntry
          v-for="category in skills.categories"
          :key="category.title"
          :title="category.title"
          class="w-1/2 md:w-1/3 mb-8"
        >
          <ul>
            <li v-for="skill in category.items" :key="skill">{{ skill }}</li>
          </ul>
        </CvEntry>
      </div>
    </CvSection>

    <CvSection
      v-for="section in experience"
      :key="section.title"
      :title="section.title"
    >
      <div class="space-y-12 md:space-y-16">
        <CvEntry
          v-for="entry in section.items"
          :key="entry.title"
          :title="entry.title"
          :subtitle="entry.subtitle"
          :date="entry.date"
        >
          <ul v-if="entry.tech" class="list-tech dots-between -mt-3 mb-3">
            <li v-for="t in entry.tech" :key="t">{{ t }}</li>
          </ul>

          <div v-if="entry.short" class="-mt-3" />

          <div class="cv-prose">
            <nuxt-content :document="entry" />
          </div>
        </CvEntry>
      </div>
    </CvSection>
  </div>
</template>

<script>
const SECTIONS = [
  { title: "Active Work", dir: "cv/active" },
  { title: "Past Work", dir: "cv/past" },
  { title: "Appearances", dir: "cv/appearances" },
  { title: "Education", dir: "cv/education" }
];

export default {
  async asyncData({ $content }) {
    const skills = await $content("cv/skills").fetch();

    // For each section, sort the entries ascending by slug (filename)
    const experience = await Promise.all(
      SECTIONS.map(async section => {
        const items = await $content(section.dir).fetch();
        items.sort((a, b) => a.slug.localeCompare(b.slug));

        return {
          title: section.title,
          items
        };
      })
    );

    return {
      skills,
      experience
    };
  },

  head() {
    return {
      title: "Rockwell Schrock // CV"
    };
  },

  methods: {
    toThisYear(year) {
      return `${year} – Present`;
    }
  }
};
</script>

<style></style>
