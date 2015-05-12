module.exports = (grunt) ->
  grunt.initConfig
    plg: grunt.file.readJSON("package.json")
    sass:
      build:
        src: "src/scss/*.scss"
        dest: "build/style/style.css"

    slim:
      build:
        src: "src/slim/index.slim"
        dest: "index.html"

    coffee:
      build:
        src: "src/coffee/hoge.coffee"
        dest: "build/script/hoge.js"

    cjsx:
      build:
        src: "src/coffee-react/*.cjsx"
        dest: "build/script/tutorial.js"

    csslint:
      check:
        src: "<%= sass.build.dest>"

    watch:
      files: "src/**/*"
      tasks: [
        "sass"
        "slim"
        "coffee"
        "cjsx"
        "csslint"
      ]

    connect:
      server:
        options:
          port: 3001


  # plugin
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-slim"
  grunt.loadNpmTasks "grunt-contrib-csslint"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-coffee-react"

  #tasks
  grunt.registerTask "default", [
    "sass"
    "slim"
    "coffee"
    "csslint"
    "cjsx"
    "connect"
    "watch"
  ]
  return
