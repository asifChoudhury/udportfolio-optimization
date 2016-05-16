module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* Clear out the images directory if it exists */
        clean: {
          dev: {
            src: ['img/compressed', 'views/images/compressed']
          },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
          dev: {
            options: {
              create: ['img/compressed', 'views/images/compressed']
            },
          },
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css/',    //css file directory
              src: ['*.css'], //select all css files
              dest: 'css/',   //save it in specified directory
              ext: '.min.css'
            }]
          }
        },

        uglify: {
          build: {
            src: 'js/perfmatters.js',      //js file directory
            dest: 'js/perfmatters.min.js'  //save it in specified directory
          }
        },

        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'img/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'img/compressed/'
            },
            {
              expand: true,
              cwd: 'views/images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'views/images/compressed/'
            }]
          }
        },
        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   // Dictionary of files
              'index.html': 'dev/index.html',     // 'destination': 'source'
              'project-2048.html': 'dev/project-2048.html',
              'project-mobile.html': 'dev/project-mobile.html',
              'project-webperf.html': 'dev/project-webperf.html',
              'views/pizza.html': 'views/dev/pizza.html'
            }
          },
        },

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'mkdir', 'cssmin', 'uglify', 'imagemin', 'htmlmin']);
};