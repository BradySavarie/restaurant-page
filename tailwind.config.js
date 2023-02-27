module.exports = {
    content: ['./dist/*.html', './dist/*.js'],
    theme: {
        extend: {
            fontFamily: {
                Heebo: ['Heebo', 'sans-serif'],
            },
            colors: {
                'light-orange': '#FFAD64',
                'normal-orange': '#FB8351',
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
