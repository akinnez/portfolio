/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts,md}"],
    darkMode: ["selector"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                tertiary: "hsl(var(--tertiary))",
                neutral: {
                    html: "#939699",
                    twc: "#FD9389",
                    c: "#8E8EA9",
                },
            },
        },
    },
    plugins: [],
};
