---
title: 'Creating Custom Gutenberg Blocks with React and WordPress - Part 2'
date: '2019-10-20'
tags: '#wordpress, #react'
featured_image: ./featured_image.jpg
keywords: 'wordpress, react, wordpress and react, gutenberg, custom gutenberg block'
description: "I'll explain how to use JSX when building out custom Gutenberg blocks with react and WordPress."
published: false
---

In the [last post](/blog/custom-gutenberg-blocks-with-react-and-wordpress-part-1), I talked about registering custom blocks in WordPress as well as why you may want to use Gutenberg with custom blocks. While you can use plain old React to create your custom blocks, it is easier to read your code using a tool like JSX.

Today I'll be teaching you some basics of a JavaScript library called Gulp, what Gulp is used for, and how to use it when creating custom Gutenberg blocks.

## What is Gulp?

While Gulp is still a relatively new tool to me, it has been around for several years. Gulp is a build tool that can be used to improve your workflow and increase productivity using automations. For instance, when using sass you have to have some way to compile the code into plain css since browsers don't know how to interpret sass code.

With a few lines of code for configuration, you can [run a command in your terminal](/blog/getting-started-with-the-linux-cli) and have the sass files compiled using Node.js! If you want to support a wide array of browsers, you could also configure Gulp to add browser prefixes to any css code that needs them for maximum browser compatibility.