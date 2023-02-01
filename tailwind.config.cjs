/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                background: "#1a2328",
                primary: "#d4a152",
                secondary: "rgba(255, 255, 255, 0.7)",
                dimBrown: "#672c1a",
                dimMaroon: "#89352a"
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            maxWidth: {
                '1/2': '50%',
                '9/10': '90%',
            }
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};