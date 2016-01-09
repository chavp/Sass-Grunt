'use strict';

module.exports = function (grunt) {
    // [3] Load all plug-in tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss',
                    'css/variables.css': 'sass/Variables.scss',
                    'css/nesting.css': 'sass/nesting.scss',
                    'css/import.css': 'sass/import.scss',
                    'css/mixins.css': 'sass/mixins.scss',
                    'css/extend-inheritance.css': 'sass/extend-inheritance.scss'
                }
            }
        },

        // Configuring the 'watch' task from 'grunt-contrib-watch'
        watch: {
            //options: {
            //    livereload: '<%= connect.options.livereload %>',
            //},
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};