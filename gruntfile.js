module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: ['src/js/**/*.js'],
                dest: 'build/js/script.js'
            },
            css: {
                src: ['src/js/**/*.css', 'src/css/*.css'],
                dest: 'build/css/styles.css'
            }
        },

        uglify: {
            js: {
                src: ['build/js/script.js'],
                dest: 'build/js/script.min.js'
            }
        },

        cssmin: {
            css: {
                src: ['build/css/styles.css'],
                dest: 'build/css/styles.min.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};