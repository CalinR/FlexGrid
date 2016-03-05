module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /* SASS COMPILER */
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    "dist/flexgrid.css": "src/flexgrid.scss"
                }
            }
        },

        /* AUTOPREFIXER */
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            css: {
                files: {
                    "dist/flexgrid.css": "dist/flexgrid.css"
                }
            }
        },

        /* CSS NANO */
        cssnano: {
            options: {
            },
            dist: {
                files: {
                    "dist/flexgrid.min.css": "dist/flexgrid.css"
                }
            }
        },

        /* WATCH */
        watch: {
            options: {
                atBegin: true
            },
            less: {
                //files: '**/*.less',
                files: '**/*.scss',
                tasks: ['compile']
            }
        }

    });

    /* GRUNT TASKS */
    grunt.registerTask('default', ['compile']);
    grunt.registerTask('compile', ['sass', 'postcss', 'cssnano']);
}