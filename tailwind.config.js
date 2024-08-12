/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: ['selector', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                softBlue: '#1677ff',
                lightGray: '#FEFEFE',
                mediumGray: '#e5e7eb',
                gray: '#79797E'
            }
        }
    },
    plugins: []
};
