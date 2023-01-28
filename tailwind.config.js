/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{tsx, ts}", "./src/index.css"],
    theme: {
        extend: {},
        colors: {
            "dark-blue": "#053461",
            "light-blue": "#9bc7ef",
            "blue-1": "#0057b0",
            "light-gray": "#f5f5f5",
            "dark-gray": "#333333",
            "gray-1": "#cecece",

        }
    },
    plugins: [],
    darkMode: "class"
}
