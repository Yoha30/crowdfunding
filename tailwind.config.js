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
            textColor: theme => theme('colors'),
            textColor: {
                'primary': '#3CB4ACFF',
            },

            width: {
                '4/7': '53.5%',
                '84': '23rem',
                '100': '201vw',
            },
            height: {
                '100': '40vw',

            },
            margin: {
                '84': '21.5rem',
                '68': '17rem',
            },
            inset: {
                '18': '4.5rem',
                '84': '22rem',
                '98': '29rem',
                '100': '38rem',
                '120':'49rem',
                '150': '54rem',
                '200': '76rem',
            },
            borderWidth: {
                '0.25': '0.2px',
            },
            screens: {
                'xs': '350px',
                // => @media (min-width: 640px) { ... }

                'st': '370px',
                // => @media (min-width: 1024px) { ... }
                'si': '400px',
                'sp': '420px',
                'max': '452px',

                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
