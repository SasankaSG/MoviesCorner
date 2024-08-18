module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '1200px'},
        },
        colors:{
          "darkBG" : "#1E293B",
        }
      },
    },
    plugins: [],
}

