---
title: 'Gulp Basics - A Modern Frontend Workflow'
date: '2019-11-02'
tags: '#workflow'
featured_image: ./featured_image.jpg
keywords: 'gulp.js, gulp workflow, gulp basics, frontend workflow'
description: "Today I'll be teaching you some basics of a build tool called Gulp, what Gulp is used for, and how to use it when setting up a front-end for your project."
published: true
---

With front-end tools evolving as rapidly as they do, it can be hard to know how to use things while maintaining compatibility with various browsers. Fortunately, there is a handy JavaScript library called Gulp which can make your life easier when building front-ends with just about any tool you choose.

Today I'll be teaching you some basics of Gulp, what Gulp is used for, and how to use it when setting up a front-end for your project.

## What is Gulp?

While Gulp is still a relatively new tool to me, it has been around for several years. Gulp is a build tool that can be used to improve your workflow and increase productivity using automations. For instance, when using sass you have to have some way to compile the code into plain css since browsers don't know how to interpret sass code.

With a few lines of code for configuration, you can [run a command in your terminal](/blog/getting-started-with-the-linux-cli) and have the sass files compiled using Node.js! If you want to support a wide array of browsers, you could also configure Gulp to add browser prefixes to any css code that needs them for maximum browser compatibility.

## Setting up gulp

To set up a Gulp workflow in your project, there are a few steps involved. The first of which is to install gulp. To do this, I'll be using npm, although you can use Yarn if you'd like. First you should install the Gulp CLI library. To do this, use the following command in your terminal:

```bash:title=Terminal
$ npm install --global gulp-cli
```

Next, initialize your `package.json` file:

```bash:title=Terminal
$ npm init -y
```

Once the project is initialized in the `package.json` file, you should add the Gulp library. The command below will add Gulp as a dev dependency:

```bash:title=Terminal
$ npm install --save-dev gulp
```

Now that Gulp is installed globally on your machine, you have a node project created, and you have added Gulp as a dev dependency, it's time to create a configuration file. To do this, create a file called `gulpfile.js` in the root directory of your project.

```bash:title=Terminal
$ touch gulpfile.js
```

This file will hold all of the configurations for your project. It begins with imports for whatever plugins you'll be using and then includes "tasks" where you will tell Gulp what to do. Each task is given a unique name and handles a specific function. It should be noted that more advanced projects can have multiple files which hold these tasks and pull them all into the `gulpfile.js` file. For the purposes of this post, I'll be putting everything into the main file.

## Basics of your gulpfile.js

The first thing to do in your `gulpfile.js` is to import the Gulp library. There are a few ways to do this and I will list both below. I prefer and will be using the second method with destructuring because it's a bit more concise. It's totally up to you though, so choose the option that's right for you!

```js:title=gulpfile.js
/**
 * The first method which would allow you to use
 * functions as gulp.task()
**/
const gulp = require('gulp');
/* or */
const {dest, series, src, task, watch} = require('gulp');

/* Task to do something */
task('sample', function(done) {
  src('path/to/file')
    .pipe(doSomething())
    .pipe(dest('path/to/new/dest'));
});

/* What to do when the command "gulp" is run */
task('default', series('sample'));
```

Let's unpack this a little bit. The first part at the top is where you will import gulp. The first example imports the gulp library and then would require you to use `gulp.watch`, `gulp.series`, etc when doing anything. The second involves destructuring which allows you to assign multiple variables at once.  As I said before, this is totally personal preference, so choose the one you like best.

The second section is where you create a custom task which takes a few parameters. The first is the name of the task, which should be unique. The second is a function where you will provide the instructions for the task. If you only wanted to run this custom task, you'd run the following command in the terminal (with the appropriate name, of course):

```bash:title=Terminal
$ gulp sample
```

The third is another task, but it's a bit different. You'll notice that the name of the task is "default". This functions the same as any other task except that it doesn't require the task name when you run the command in the terminal. You can just run `gulp` in the terminal and it will automatically run this task. If you look closely, you can also see that the function is called `series()` which you imported from the Gulp library. This allows you to chain together the custom tasks you wrote in the order in which they're listed.

## Adding gulp plugins

There are plugins for just about everything in Gulp. This is part of what makes gulp so awesome for front-end workflows. I will be covering some of them such as gulp-sass, gulp-rename, gulp-autoprefixer, and more. For a full list, you can check out the [plugins page on the gulp site](https://gulpjs.com/plugins/). To add a plugin, there are a few steps involved. First, you need to install the appropriate library:

```bash:title=Terminal
$ npm install --save-dev gulp-rename
```

After the library is installed, you need to import it into your `gulpfile.js` file for use in a task, like so:

```js:title=gulpfile.js
...
const rename = require('gulp-rename');
...
```

Now that you have the library imported, you can use it in a task. Each library works a little bit differently, so make sure to consult the documentation to find out how it should be used in your project. I'll explain how to use a few different libraries that I use pretty often.

## Compiling Sass Code

Browsers can't interpret sass code, so it's in order to take advantage of this awesome tool you need a way to turn sass into plain css. There are some different tools you can use such as a sass cli or different pieces of software, but I prefer to set it up in a Gulp workflow because it gives me more power than just compiling it. I can modify it as needed. To compile sass code with Gulp, you should use the `gulp-sass` library. You can add it as a dependency like so:

```bash:title=Terminal
$ npm install --save-dev node-sass gulp-sass
```

Once the library is added you can import it into your `gulpfile.js` and create a custom task for sass like this:

```js:title=gulpfile.js
...
const sass = require('gulp-sass');
...

task('sass', function(done) {
  src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
    done();
});
```

The task above is using a technique called "globbing" in the src function. This allows you to use wildcards which will look at any files that match the pattern. In this case the pattern is anything inside the scss folder ending in file extension `.scss`.

## Minifying CSS code

After I set up the task to compile sass into css, I set up a new task which will minify the the css code. To do this, I use a few different libraries. The first of which is called `gulp-rename` and the second is `gulp-cssnano`. The first library allows me to take my existing file, say `style.css` and save a modified copy as `style.min.css` which will help to keep track of what's what. Gulp-cssnano is what actually minifies the css code. Both libraries can be installed with the following command:

```bash:title=Terminal
$ npm install --save-dev gulp-rename gulp-cssnano
```
Then a new task can b created. In this case, I'm calling the new task "minify-css".

```js:title=gulpfile.js
...
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
...

task('minify-css', function(done) {
  src('dist/css/style.css')
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/css'));
    done();
});
```

## Automating Browser Prefixes

The next thing I like to do in my `gulpfile.js` is to set up Gulp to automatically add vendor prefixes to my CSS. This saves me a lot of time when writing code because I don't have to look up vendor prefixes or wonder about compatibility. I simply write the code I want to use and Gulp finds all of the prefixes and adds them in automatically. To do this, I use the `gulp-autoprefixer` library. This can be set up like so:

```bash:title=Terminal
$ npm install --save-dev gulp-autoprefixer
```

```js:title=gulpfile.js
...
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
...

task('minify-css', function(done) {
  src('dist/css/style.css')
    .pipe(autoprefixer({
      "overrideBrowserslist": [
        "> 1%",
        "last 2 versions",
        "ie >= 11"
      ]
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/css'));
    done();
});
```

Let's take a look at this code. You may notice that I went ahead and reused the code from the `minify-css` section and just added to it. That's because I don't necessarily need to create a new task just for this. I'd rather add vendor prefixes before saving it to a minified css file. To do this, I added a function called autoprefixer to the task which has several different parameter options. In this case, I'm just using one called `overrideBrowserslist` which allows me to specify which browsers I want to support. The list I have specified says that I want to support all browsers that are used by more than 2% of the world's population, I want to support the last 2 versions of those browsers, and I want to specifically support IE 11 and greater.

This is amazing for someone like me who hates having to support IE 11, but that's a discussion for another time...

<video src="https://media.giphy.com/media/MrFNWzMrSgVFK/giphy.mp4" autoplay loop muted playsinline></video>

## Using Babel for JavaScript

Now that your Sass is being compiled, prefixed, and minified, you should turn your attention to the JavaScript being used in your project. In recent years, improvements have been made to JavaScript which make coding so much easier and more enjoyable. The only problem is: not all browsers support this new syntax. To get around this, you can use a tool called "Babel", which will take your modern JavaScript code and compile it into code that all (or at least most) browsers can understand.

To add babel to the project, you need to add a few dependencies. You can do this like so:

```bash:title=Terminal
$ npm install --save-dev gulp-babel @babel/core @babel/preset-env
```

This is the setup I use because it works for most projects I'm working on. This can be any babel setup you prefer though, so if you're familiar with the library feel free to play around with it. To use babel in the `gulpfile.js`, add the following code...

```js:title=gulpfile.js
...
const babel = require('gulp-babel');
...

task('javascript', function() {
  return src('js/**/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest('dist/js'));
});
```

This task also uses globbing which takes any JavaScript file that is saved and applies your Babel settings and saves the new version in a `dist/js` folder. This makes it easy to find and prevents any issues with files having the same name within the root `js` folder.

## Combining JavaScript files

What if you have several different JavaScript files to keep things organized in development, but you really don't want that in production? There's another plugin you can use which will combine all of your JavaScript files into one. To do this, I use a plugin called `gulp-concat` which does exactly what you'd expect. Installation just requires the following code:

```bash:title=Terminal
$ npm install --save-dev gulp-concat
```

After installing `gulp-concat`, you can add it to your `gulpfile.js` and combine your JS files!

```js:title=gulpfile.js
...
const babel = require('gulp-babel');
const concat = require('gulp-concat');
...

task('javascript', function() {
  return src('js/**/*.js')
  .pipe(concat('scripts.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest('dist/js'));
});
```

What this addition to the `javascript` task does is combines all of the JS files in the `js` directory into a single file called `scripts.js` before applying the babel plugin to the code. This makes everything easy to find in a single file which can reduce http requests and improve performance.

## Minify JavaScript files

The last thing I will talk about today is minifying JavaScript. I don't always do this since it can cause problems in the JS code sometimes, but just in case you want to and you're curious I'll drop so knowledge.

<video src="https://media.giphy.com/media/lRRjGTRlFwmQYFmmpU/giphy.mp4" autoplay muted loop playsinline></video>

To minify your Javascript code, you can use a plugin called `gulp-uglify`. If I'm being honest, this one is my favorite plugin name, but I digress. The following command will add the library as a dependency:

```bash:title=Terminal
$ npm install --save-dev gulp-uglify
```

Below is a task which handles the minification of JavaScript after it's imported:

```js:title=gulpfile.js
task('uglify', function() {
  return src('dist/scripts.js')
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest('dist'));
})
```

## The watch task

One final special task I want to talk about is the "Watch" task. It is similar to the default task, except that it allows gulp to actively watch for changes and re-run anytime a change is saved. This can be very handy for ongoing development so you don't have to keep running the same command over and over. The following code will set up a watch task:

```js:title=gulpfile.js
task('watch', function (done) {
  watch('scss/**/*.scss', series('styles', 'minify'));
  watch('js/**/*.js', series('javascript'));
  done();
});
```

## The completed gulpfile

If you're just interested in using the Gulpfile from this tutorial, the code for the whole file can be found below:

```js:title=gulpfile.js
const { task, series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


task('styles', function (done) {
  src('scss/styles.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
  done();
});

task('minify', function (done) {
  src('dist/css/styles.css')
    .pipe(autoprefixer({
      "overrideBrowserslist": [
        "> 1%",
        "last 2 versions",
        "ie >= 11"
      ]
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/css'));

  done();
});

task('javascript', function() {
  return src('js/**/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest('dist/js'));
});

task('uglify', function() {
  return src('dist/js/scripts.js')
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest('dist'));
})

task('watch', function (done) {
  watch('scss/**/*.scss', series('styles', 'minify'));
  watch('js/**/*.js', series('javascript', 'uglify));
  done();
});

task('default', series('styles', 'minify', 'javascript', 'uglify'));
```

## Wrapping Up

As you can see, Gulp is a powerful tool which can greatly improve your workflow. It empowers you to use the most modern technologies without sacrificing cross-browser compatibility. The only limit of using Gulp in your project is your imagination.

Have thoughts or questions? You can reach me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).