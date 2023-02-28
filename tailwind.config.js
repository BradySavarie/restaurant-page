module.exports = {
    content: ['./dist/*.html', './dist/*.js'],
    theme: {
        extend: {
            fontFamily: {
                Heebo: ['Heebo', 'sans-serif'],
                Poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'deep-red': '#dd2727',
                'light-blue': '#ADD4D3',
                'dark-gray': '#333237',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
