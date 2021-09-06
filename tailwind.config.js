module.exports = {
    mode: 'jit',
    purge: [
        'index.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'desktop': "url('images/image-hero-desktop.jpg')",
                'mobile': "url('images/image-hero-mobile.jpg')",
            }),
            backgroundColor: theme => ({
                ...theme('color'),
                'button': '#3CB4AB',
            }),
            width: {
                '4/7': '53.5%',
                '84': '23rem',
                '100': '201vw',
            },
            height: {
                '100': '40vw',

            },
            margin:{
                '84': '21.5rem',
                '68':'17rem',
            },
            inset: {
                '84': '22rem',
                '100':'38rem',
            },
            borderWidth: {
                '0.25': '0.2px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
