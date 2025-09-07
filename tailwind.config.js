module.exports = {
    theme: {
        extend: {
            animation: {
                pulse: "pulse var(--duration) ease-out infinite",
            },
            keyframes: {
                pulse: {
                "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
                "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
    variants: {
        extend: {
        backgroundColor: ['active'],
        textColor: ['active'],
        }
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ['./src/**/*.{js,ts,jsx,tsx}'],
        options: {
        safelist: ['backdrop-filter', 'backdrop-blur-lg'],
        },
    },
}