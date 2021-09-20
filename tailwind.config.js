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
                'secondary': '#147B74FF',

            }),
            textColor: theme => theme('colors'),
            textColor: {
                'primary': '#3CB4ACFF',
                'darkCyan': '#147B74FF',
            },
            fontWeight: {
                'greatbold': '750',
            },
            width: {
                '4/7': '53.5%',
                '42': '10.7rem',
                '68': '17rem',
                "75": '19rem',
                '78': '21rem',
                '84': '23rem',
                '97': '37rem',
                '98': '39rem',
                '100': '201vw',
            },
            height: {
                '100': '40vw',
                '89': '22rem',
            },
            margin: {
                '84': '21.5rem',
                '68': '17rem',
            },
            inset: {
                '18': '4.5rem',
                '82': '20.5rem',
                '84': '22rem',
                '86': '24rem',
                '85': '23rem',
                '88': '37.5rem',
                '96': '26rem',
                '98': '29rem',
                '98.5': '24.75rem',
                '99': '32rem',
                '99.5': '34.5rem',
                '99.6': '35.25rem',
                '99.7': '36.75rem',
                '100': '38rem',
                '105':'31rem',
                '108':'41rem',
                '110': '46rem',
                '115':'47.5rem',
                '120': '49rem',
                '150': '54rem',
                '175': '62rem',
                '200': '76rem',
            },
            borderWidth: {
                '0.25': '0.2px',
            },
            borderColor: {
                'radio': '#3CB4ACFF',
                'check': '#147B74FF',
            },
            divideColor: {
                'darkgreen': '#147B74FF',
            },

            screens: {
                'xs': '350px',
                // => @media (min-width: 640px) { ... }

                'st': '370px',
                // => @media (min-width: 1024px) { ... }
                'si': '400px',
                'sp': '420px',
                'max': '452px',
                'bl': '1350px',
                'dl': '1910px',
                // => @media (min-width: 1280px) { ... }
            },
            backgroundSize: {
                '100': '100%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
