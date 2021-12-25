module.exports = {
    prefix: 'twl-',
    theme: {
        colors: {
            'green': '#41b883',
            'black': '#35495e',
            'white': '#ffffff',
            'red': '#d63200'
        },
        extend: {
            boxShadow: {
                'custom-green': '0 0 15px 2px rgba(65 184 131 / 0.4)',
                'custom-red': '0 0 15px 2px rgba(221 102 51 / 0.4)',
            }
        }
    },
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue'
    ]
};
