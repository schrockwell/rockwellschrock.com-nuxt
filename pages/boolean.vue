<template>
  <div class="container mx-auto my-4 md:my-8">
    <div class="relative md:flex">
      <div
        class="flex md:flex-col px-4 md:px-0 lg:pr-32 md:pr-16 space-x-2 md:space-x-0 text-xl lg:text-3xl"
      >
        <button
          :class="[buttonClasses.and, 'flex-1 focus:outline-none rounded-lg border-4 border-transparent hover:border-gray-600 cursor-pointer text-center py-2 lg:py-6 mb-8 md:mb-4 md:px-12 transition-border duration-300']"
          @click="setOperator('and')"
        >AND</button>

        <button
          :class="[buttonClasses.or, 'flex-1 focus:outline-none rounded-lg border-4 border-transparent hover:border-gray-600 cursor-pointer text-center py-2 lg:py-6 mb-8 md:mb-4 md:px-12 transition-border duration-300']"
          @click="setOperator('or')"
        >OR</button>

        <button
          :class="[buttonClasses.not, 'flex-1 focus:outline-none rounded-lg border-4 border-transparent hover:border-gray-600 cursor-pointer text-center py-2 lg:py-6 mb-8 md:mb-4 md:px-12 transition-border duration-300']"
          @click="setOperator('not')"
        >NOT</button>
      </div>

      <div class="flex-grow relative mx-4 md:mx-0">
        <!-- White-filled BG circles establish the height of this flex block, for positioning -->
        <div class="flex">
          <div class="relative" style="width: 60%; padding-bottom: 60%">
            <div class="absolute inset-0 bg-white rounded-full" />
          </div>
          <div class="relative" style="width: 60%; padding-bottom: 60%; margin-left: -20%">
            <div class="absolute inset-0 bg-white rounded-full" />
          </div>
        </div>

        <!-- Color-filled circles to show operation -->
        <div class="flex absolute inset-0">
          <div class="relative" style="width: 60%; padding-bottom: 60%">
            <div :class="['absolute inset-0 border-4 rounded-full', leftFillClass]" />
          </div>
          <div class="relative" style="width: 60%; padding-bottom: 60%; margin-left: -20%">
            <div
              :class="['absolute inset-0 border-4 rounded-full', rightFillClass]"
              :style="clipStyle"
            />
          </div>
        </div>

        <!-- Black borders -->
        <div class="flex absolute inset-0">
          <div class="relative" style="width: 60%; padding-bottom: 60%">
            <div class="absolute inset-0 border-4 border-black rounded-full" />
          </div>
          <div class="relative" style="width: 60%; padding-bottom: 60%; margin-left: -20%">
            <div class="absolute inset-0 border-4 border-black rounded-full" />
          </div>
        </div>

        <div
          class="flex absolute inset-0 text-xl sm:text-3xl md:text-xl lg:text-3xl items-center justify-between"
        >
          <div style="width: 40%" class="px-4 md:px-8">
            <input
              class="w-full transition-border duration-300 text-center bg-transparent outline-none placeholder-gray-800 border-b-2 border-black border-opacity-0 hover:border-opacity-25 focus:border-opacity-25 border-op"
              placeholder="Endangered"
              v-model="query1"
            />
          </div>
          <div>{{ operatorText }}</div>
          <div style="width: 40%" class="px-4 md:px-8">
            <input
              class="w-full transition-border duration-300 text-center bg-transparent outline-none placeholder-gray-800 border-b-2 border-black border-opacity-0 hover:border-opacity-25 focus:border-opacity-25 border-op"
              placeholder="Birds"
              v-model="query2"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 my-8 md:my-12 text-lg md:text-3xl text-center">{{ hintText }}</div>

    <div class="border-t border-gray-400 my-8 py-8 mx-4 md:mx-0">
      <p class="block md:hidden mb-4">
        <strong>NEW!</strong> Type your own search terms into the diagram.
      </p>

      <div class="flex justify-between">
        <button class="text-gray-600 flex items-center" @click="showInfo = !showInfo">
          <div
            class="w-6 mr-2 text-bold text-lg bg-gray-400 rounded leading-6"
          >{{ showInfo ? '–' : '+'}}</div>More Info
        </button>

        <p class="hidden md:block">
          <strong>NEW!</strong> Type your own search terms into the diagram.
        </p>
      </div>

      <div v-show="showInfo" class="my-4">
        <h2 class="text-2xl font-semibold">The Boolean Machine</h2>
        <h3 class="mb-4">
          by
          <a
            href="https://rockwellschrock.com"
            class="underline hover:text-gray-600"
          >Rockwell Schrock</a> &ndash;
          <a
            href="mailto:schrockwell@gmail.com"
            class="underline hover:text-gray-600"
          >schrockwell@gmail.com</a>
        </h3>
        <p
          class="my-4"
        >You are free to use this page in your presentations, course materials, or anything else.</p>

        <h4 class="text-lg font-semibold mt-8">Custom URL</h4>
        <p
          class="text-gray-600 mb-1"
        >Copy this URL to save the own custom search terms that you've typed in.</p>
        <input
          type="text"
          class="w-full border rounded bg-white shadow-inner px-3 py-2 font-mono text-sm"
          readonly
          :value="customUrl"
        />

        <h4 class="text-lg font-semibold mt-8">Embed Code</h4>
        <p
          class="text-gray-600 mb-1"
        >Use this HTML to embed the Boolean Machine directly into another page.</p>
        <textarea
          readonly
          rows="3"
          class="w-full border rounded bg-white shadow-inner px-3 py-2 font-mono text-sm"
          v-model="embedCode"
        />
      </div>
    </div>
  </div>
</template>

<script>
const FILL_STYLES = {
  none: "bg-white",
  and: "bg-red-500",
  or: "bg-yellow-400",
  not: "bg-green-500",
};

const HINT_TEXT = {
  none: "Select a boolean operator to see how it works.",
  and:
    "When using AND, you only receive pages including both of your search terms, though not necessarily next to one another.",

  or:
    "When using OR, you receive pages containing either one or both of your search terms.",
  not:
    "The NOT operator is used to find pages including only the first term and excluding the second term.",
};

export default {
  layout: "plain",
  head() {
    return {
      title: "The Boolean Machine",
    };
  },

  mounted() {
    // Only run this client-side, since we need window.location, etc
    if (window) {
      this.updateURL();
    }
  },

  data() {
    return {
      showInfo: false,
      operator: "none",
      query1: this.$route.query.query1 || "",
      query2: this.$route.query.query2 || "",
      customUrl: "",
    };
  },

  methods: {
    updateURL() {
      if (this.query1 || this.query2) {
        const queryParams = `?query1=${window.encodeURIComponent(
          this.query1
        )}&query2=${window.encodeURIComponent(this.query2)}`;
        window.history.replaceState(null, "", queryParams);
      } else {
        window.history.replaceState(null, "", "/boolean");
      }

      this.customUrl = window.location.href;
    },

    setOperator(operator) {
      if (this.operator === operator) {
        this.operator = "none";
      } else {
        this.operator = operator;
      }
    },
  },

  computed: {
    hintText() {
      return HINT_TEXT[this.operator];
    },

    operatorText() {
      if (this.operator === "none") {
        return null;
      } else {
        return this.operator.toUpperCase();
      }
    },

    fillStyles() {
      return FILL_STYLES;
    },

    fillClass() {
      return FILL_STYLES[this.operator];
    },

    buttonClasses() {
      return {
        and: this.operator === "and" ? FILL_STYLES.and : "bg-gray-400",
        or: this.operator === "or" ? FILL_STYLES.or : "bg-gray-400",
        not: this.operator === "not" ? FILL_STYLES.not : "bg-gray-400",
      };
    },

    leftFillClass() {
      switch (this.operator) {
        case "or":
          return FILL_STYLES.or;
        case "not":
          return FILL_STYLES.not;
        case "and":
        default:
          return undefined;
      }
    },

    rightFillClass() {
      switch (this.operator) {
        case "and":
          return FILL_STYLES.and;
        case "or":
          return FILL_STYLES.or;
        case "not":
          return FILL_STYLES.none;
        default:
          return undefined;
      }
    },

    clipStyle() {
      if (this.operator === "and") {
        return "clip-path: circle(50% at -16.6667% 50%)";
      } else {
        return null;
      }
    },

    embedCode() {
      return `<iframe src="${this.customUrl}" width="100%" height="500"> 
<p>Your browser does not support iframes</p>
</iframe>`;
    },
  },

  watch: {
    query1() {
      this.updateURL();
    },
    query2() {
      this.updateURL();
    },
  },
};
</script>