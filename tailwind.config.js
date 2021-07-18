module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "skin-tone-1": "#f4d8c3",
                "skin-tone-2": "#e8debd",
                "skin-tone-3": "#7d695f",
            },
            fontFamily: {
                primaryBold: ["FiraSans-Light"],
                primaryRegular: ["FiraSans-Thin"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
