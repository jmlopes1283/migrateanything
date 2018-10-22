module.exports = {
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300,700"
      }
    ],
    script: [
      {
        src: "/js/load.js"
      }
    ],
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  },
  rules: [
	  {
	   test: /\.svg$/,
	   loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
	  },
	],
  css: ["@/assets/style.css"]
};

//https://nuxtjs.org/
//https://scotch.io/tutorials/build-a-server-side-rendered-vue-app-with-nuxtjs#creating-navbar-component
