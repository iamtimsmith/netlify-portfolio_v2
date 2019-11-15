---
title: 'Creating Custom Gutenberg Blocks with React and WordPress - Part 2'
date: '2019-10-20'
tags: '#wordpress, #react'
featured_image: ./featured_image.jpg
keywords: 'wordpress, react, wordpress and react, gutenberg, custom gutenberg block'
description: "I'll explain how to use JSX when building out custom Gutenberg blocks with react and WordPress."
published: true
---

In the [last post about custom Gutenberg blocks with React and WordPress](/blog/custom-gutenberg-blocks-with-react-and-wordpress-part-1), I talked about registering custom blocks in WordPress as well as why you may want to use Gutenberg with custom blocks. While you can use plain old React to create your custom blocks, it is easier to read your code using a tool like JSX.

In this post I'll explain how and why you should use Gulp to improve your workflow when building custom Gutenberg blocks with React and Wordpress.

## What is Gulp?

In a nutshell, Gulp is a build tool which allows you to use to coolest new stuff without sacrficing compatibility. I'm not going to talk a ton about what Gulp is, but if you're curious you [learn more about it in this blog post](/gulp-basics-modern-frontend-workflow). For the purposes of this article, I will be keeping it VERY simple. It will basically be the absolute bare minimum you will need to build custom blocks.

<video src="https://media.giphy.com/media/5vUTS3pfJAwAv2yUNM/giphy.mp4" width="300" autoplay loop muted playsinline></video>

## Setting Up Gulp and a gulpfile

The first step to getting the project going is to create a project using NPM or Yarn. The code below will create a `package.json` file to hold your dependencies.

```bash:title=Terminal
$ npm init -y
```

The `-y` flag will just set up the `package.json` file in a default way. Of course, if you feel so inclined you can answer all the questions and set it up however you'd like. Next you need to add Gulp as a dependency:

```bash:title=terminal
$ npm install --save-dev gulp
```

A `node_modules` folder should appear in your theme which indicates that the dependencies have been installed. Finally to get up-and-running, you need a `gulpfile.js` file. This will hold the Gulp configurations for your theme.

```bash:title=Terminal
$ touch gulpfile.js && open $_
```

Now that you have initialized a project, installed the Gulp library into your project, and created the configuraton file, you're ready to start setting up your project for custom Gutenberg block development!

## Concatenating blocks files

The first thing I'll talk about is combining your JavaScript files into one so WordPress only has to pull in one file for all of your blocks. You could definitely just put all of your custom blocks into one file, but in my opinion this would get really long and wicked messy if you're building out several blocks for your theme. Instead, I like to put each custom block into it's own directory which can hold the block code, any styles for the block, and even testing if you wanted.

In [this article about Gulp](/blog/gulp-basics-modern-frontend-workflow), I mentioned a library called `gulp-concat` to perform this operation. Today I'll be using a different library which offers similar functionality with the addition of some tools we'll use to handle our JavaScript. First we'll install the library:

```bash:title=Terminal
$ npm install --save-dev gulp-concat-util
```

Once it is installed, you can start setting up your `gulpfile.js` file. At the top will be the import statements. I will be using destructuring where available to keep things tidy, though this isn't required.

```js:title=gulpfile.js
const { task, src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat-util');
```

After you have imported your libraries, you can write a custom task to handle JavaScript. The code below will set up a basic task to find all of your custom block files and put them into a single file to be loaded by your theme:

```js:title=gulpfile.js
task('blocks', function () {
  return src('./blocks/**/*.js')
    .pipe(concat('blocks.js'))
    .pipe(dest('dist/js'))
});
```

## Establishing Global variables

If you were to just try and run things like this, you'd have a few problems. The first problem would be an error about importing components into your custom block file. The first error I started seeing was this:

```bash:title=Terminal
SyntaxError: import declarations may only appear at top level of a module
```

In playing around with different ideas, I also started getting an error where I was using the same component in different blocks. Since they were all being put into a single JavaScript file, I was seeing an error about importing the same thing multiple times. Also no bueno. This is the reason I'm using the `gulp-concat-util` library instead of the normal `gulp-concat`. In addition to it's ability to concatenate different JavaScript files into one, it can wrap the concatenated code in other code such as a function. Leveraging this capability allows you to wrap everything in a function which sets global variables right in your `gulpfile.js` file! 

In order to make this work, I will create a new variable outside of the task which holds the code to go before and after the stuff in my block files. In this case, I decided to call it `header` and `footer`, respectively. The sample below establishes the variable with the wrapper code:

```js:title=gulpfile.js
const block = {
  header: `(function (wp) {
    const { registerBlockType } = wp.blocks;
    const {RichText} = wp.editor;
    const {components, editor, blocks, element, i18n} = wp;
  `,
  footer: `})(window.wp);`
}
```

In the wrapper code, I have create a function which passes in the `wp` variable. This is provided by WordPress and allows us to access the different components pieces already created. Inside the function I'm importing several different things, though not all of these are required. The only one which is actually required is the `registerBlockType`. When you create your first block today, you'll use the `RichText`. Other than that, you can omit the rest if you'd like. If you do this and you are still getting errors about a component not being found, you should also remember to check your `blocks.php` file to make sure you have the component's parent added as a dependency.

Now it's time to wrap the existing concatenation in this function so all of the code you write for your blocks will inherit these global variables:

```js:title=gulpfile.js
task('blocks', function () {
  return src('./blocks/**/*.js')
    .pipe(concat('blocks.js'))
    .pipe(concat.header(block.header))
    .pipe(concat.footer(block.footer))
    .pipe(dest('dist/js'))
});
```

## Setting up JSX with Gulp

In addition to the error I mentioned before about imports and exports, with the current setup you need to build your component using the `createElement` function in React. In my opinion, this can get messy pretty quick so I prefer to use JSX. Next I'll show you how to set that up in your project. To compile JSX into `createElement` functions that the browser can interpret, I will be using Babel. For simplicity's sake, I'll be using the `@babel/preset-react` library to handle this. First, there are some dependencies which need to be set up:

```bash:title=Terminal
$ npm install --save-dev gulp-babel @babel/core @babel/preset-react
```

Now that you have all three of these installed, you can add them to your `gulpfile.js` file. There are a few different places for this:

```js:title=gulpfile.js
...
const babel = require('gulp-babel');
```

The only import needed at the top is `gulp-babel`. The rest will be used in a `pipe` function inside the existing task:

```js:title=gulpfile.js
task('blocks', function () {
  return src('./blocks/**/*.js')
    .pipe(concat('blocks.js'))
    .pipe(concat.header(block.header))
    .pipe(concat.footer(block.footer))
    .pipe(babel({
      presets: ['@babel/preset-react']
    }))
    .pipe(dest('dist/js'))
});
```

## The completed gulpfile

I won't go over it in detail, but you should set up a watch and default task in your `gulpfile.js` file. I have gone ahead and added it to the code below, which is what your completed `gulpfile.js` should look like:

```js:title=gulpfile.js
const { task, src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat-util');
const babel = require('gulp-babel');

const block = {
  header: `(function (wp) {
    const { registerBlockType } = wp.blocks;
    const {RichText} = wp.editor;
    const {components, editor, blocks, element, i18n} = wp;
  `,
  footer: `})(window.wp);`
}


task('blocks', function () {
  return src('./blocks/**/*.js')
    .pipe(concat('blocks.js'))
    .pipe(concat.header(block.header))
    .pipe(concat.footer(block.footer))
    .pipe(babel({
      presets: ['@babel/preset-react']
    }))
    .pipe(dest('dist/js'))
});

task('watch', function () {
  watch('./blocks/**/*.js', series('blocks'));
});

task('default', series('blocks'));
```

## Conclusion

Writing custom Gutenberg blocks can get pretty complicated, but this can become much easier with things like Gulp to help make your workflow better. By building a `gulpfile.js` file in this way, you are empowered to focus on building awesome blocks rather than worrying about errors, compatibility, and overly verbose code. In the next post in this series, I'll go over block creation so you can start building the blocks of your dreams!

Have thoughts or questions? You can reach me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).
