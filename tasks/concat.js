module.exports = {
    options: {
        separator: '\n'
    },
    dist: {
        src: [  'app/app.js',
                'app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
    }
};
