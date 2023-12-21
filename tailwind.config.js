import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        colors: {
            ...colors,
            primary: "#000000",
            secondary: "#000000",
            pink: "#EB14BC",
            purple: "#AF14EB",
            "light-purple": "#D4D3F8",
            "lighter-purple" : "#D4D3F8",
            "dark-purple": "#46085E",
            "footer-bg": "#27282B",
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
