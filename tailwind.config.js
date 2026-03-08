/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./public/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a',
                    light: '#1e293b',
                    dark: '#020617',
                },
                accent: {
                    DEFAULT: '#3b82f6',
                    dark: '#2563eb',
                    light: '#60a5fa',
                },
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
            animation: {
                'float': 'float 20s infinite ease-in-out',
                'fadeInUp': 'fadeInUp 0.8s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '33%': { transform: 'translate(30px, -30px)' },
                    '66%': { transform: 'translate(-20px, 20px)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}