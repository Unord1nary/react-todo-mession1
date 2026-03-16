/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Juache', 'Pretendard', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
