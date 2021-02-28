module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                default: '1.5rem',
                sm: '3rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '8rem',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
