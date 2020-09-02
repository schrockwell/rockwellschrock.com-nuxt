const defaultTheme = require("tailwindcss/defaultTheme");
const defaultConfigStub = require("tailwindcss/stubs/defaultConfig.stub");

module.exports = {
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      display: ["Oswald"]
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    },

    boxShadow: {
      ...defaultTheme.boxShadow,

      // Making these a bit darker from the default
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none"
    },

    extend: {
      lineHeight: {
        tighter: "1.25"
      },

      letterSpacing: {
        tightest: "-0.1em"
      },

      backgroundOpacity: {
        10: "0.1"
      }
    }
  }
};
