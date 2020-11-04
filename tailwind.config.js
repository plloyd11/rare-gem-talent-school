module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
        // defaultLineHeights: true,
        // standardFontWeights: true
    },
    purge: {
        mode: 'all',
        content: ['./src/_includes/**/*.html'],
    },
    theme: {
        extend: {
            colors: {
                primaryColor: '#FFE066',
                primaryColorDark: '#EBCA47',
                secondaryColor: '#B6E7E6',
                secondaryColorDark: '#9ECCCB',
                tertiaryColor: '#E2FADB',
                tertiaryColorDark: '#C3EBB7',
                headerDark: '#202020',
                headerLight: '#404040',
                bodyCopyDark: '#606060',
                bodyCopyLight: '#808080',
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
}
