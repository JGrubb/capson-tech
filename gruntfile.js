module.exports = function (grunt) {
	'use strict';
    // Project configuration
    grunt.initConfig({
        // Task configuration
        watch: {
          livereload: {
            options: { livereload: true },
            files: ['js/main.js', 'css/main.css', 'index.html']
          }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass')

    // Default task
    grunt.registerTask('default');
};
