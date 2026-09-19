const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./resources/scripts/**/*.{js,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"Geist"', 'system-ui', 'sans-serif'],
                header: ['"Inter"', '"Geist"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#0a0e14',
                slate: colors.slate,
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                neutral: colors.slate,
                cyan: colors.cyan,
                zinc: colors.zinc,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
