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
            "light-purple": "#CF72F3",
            "lighter-purple": "#D4D3F8",
            "dark-purple": "#46085E",
            "darker-purple": "#150030",
            footer: "#27282B",
        },
        backgroundImage: {
            "contact-section": "url('/assets/images/contact-bg.png')",
            "subscribe-section": "url('/assets/images/subscribe-bg.png')",
            "access-wizard": "url('/assets/images/access-wizard.png')",
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
