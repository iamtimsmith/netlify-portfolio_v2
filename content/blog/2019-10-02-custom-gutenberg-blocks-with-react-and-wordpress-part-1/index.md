---
title: 'Creating Custom Gutenberg Blocks with React and WordPress - Part 1'
date: '2019-10-05'
tags: '#wordpress, #react'
featured_image: ./featured_image.jpg
keywords: 'wordpress, react, wordpress and react, gutenberg, custom gutenberg block'
description: "I'll show you how to create custom Gutenberg blocks using WordPress and React. This post will cover the basics and a simple setup to start developing."
published: true
---

As of WordPress 5.0, Gutenberg comes built-in. In this post, I'll give you the basics of what Gutenberg is, why it's awesome, and how to set up your environment to start creating your own custom Gutenberg blocks. While at least some knowledge of React will be useful, it is not totally required.

Before getting into building custom gutenberg blocks, I think it will be helpful to know what gutenberg is. It may also be useful to understand the history of the editor and why WordPress added it to their core codebase. Without further adieu, let's get into it!

## What is Gutenberg?

Before WordPress 5.0, users were able to edit their content using a WYSIWYG (which stands for "What You See Is What You Get) editor. This allowed content creators to write blog posts and static pages with no coding skills. At the same time, it also severely limited what they could do with their site. The theme would control what the header and footer looked like, but for any sort of custom layout, a developer would have to create a custom template and hardcode stuff in (bad) or do a bunch of crazy stuff to make things more changeable for the user (also bad).

<video src="https://media.giphy.com/media/xkmQfH1TB0dLW/giphy.mp4" autoplay loop muted playsinline></video>

In 2011, the Advanced Custom Fields plugin was released which made a lot of these things easier. It allows developers to create custom fields for a given content type (post or page) and then render them in a template with minimal code. It makes custom templates for a home page or other special pages much easier to change for both developers and end-users. This has been my go-to for years now and it's been a great experience. I've even used it when [creating sites with WordPress and Gatsby](/blog/how-to-build-a-blog-with-wordpress-and-gatsby-part-1)!

While this solution is still a great solution and offers many different use cases, I have been using Gutenberg to build sites lately. As I mentioned before, Gutenberg now comes built-in to WordPress as the default editor although it started out as a plugin. So why did it get added to core? I presume it's largely an effort to keep up with site-builders such as SquareSpace and Wix.

## What are Gutenberg blocks?

Gutenberg (named after Johannes Gutenberg who invented the first printing press) allows users to select pre-styled sections, or "blocks", for each page and fill in the content. This makes for a much more fluid user experience when creating pages or blog posts. WordPress provides some default blocks which will probably work for a lot of casual users, but what if you need a special block for a particular page or you want a block with some different styles?

Rest assured, it is totally possible to create custom blocks. I will admit: at this time some of the documentation isn't great for creating blocks but hopefully this post will help anyone getting started with Gutenberg to have a better understanding of the block development process.

### Blocks in the theme or module?

Pretty much all of the tutorials I have seen about block creation address doing so in a plugin. In addition, many of them are creating a plugin for a single block. By following these tutorials, you'd need 30 separate plugins if you needed 30 custom blocks! I have created multiple blocks in a plugin and can definitely see the value in doing so if you have a lot of existing sites to add those blocks to. Doing so would allow you to update the module, [push it to a remote git repository](/blog/take-snapshots-of-your-project-with-git), then pull your changes into whatever sites needed the update.

When I was searching the other day, I couldn't find any tutorials that explained how to set up custom blocks as a part of a theme. I believe there are some benefits to having the blocks in a theme rather than a plugin though, including (but not limited to) less dependencies to manage, keeping proprietary code for blocks specific to a website private, and not having to worry about a user accidentally disabling the plugin and breaking things.

<video src="https://media.giphy.com/media/3KCOFfdqmptLi/giphy.mp4" autoplay loop muted playsinline width="400"></video>

## Custom Gutenberg block theme setup

When I'm building a new WordPress site, I tend to use the [Underscores](https://underscores.me) theme which is made by Automattic. It's a starter theme with very minimal styling. Although it can be downloaded with Sass structures in place, there is not a bundling tool included. I will be using Gulp to allow me to write jsx in my custom blocks. Before you can start developing the custom blocks, you need to add some code to the theme to handle it. 

### Blocks directory for custom blocks

To help keep things organized, I like to place all of my custom blocks into a directory in the root of my theme called `blocks`. This directory can be called whatever you like, but I'd recommed naming it something that is easily recognizable as custom blocks. In my case, the following command will create the directory:

```bash:title=terminal
$ mkdir blocks
```

Now that my blocks directory has been created, I need to create a php file inside which will enqueue my blocks and register my custom block types. I usually give mine the appropriate name of `blocks.php` though, again, you can call this whatever you like. The following command will create the file in my blocks directory and open it in the default code editor:

```bash:title=terminal
$ touch blocks/blocks.php && open $_
```

### Create a function to register custom gutenberg blocks

The first thing you need to do in your blocks.php file (after the opening php tags) is create a function which will take care of adding the block scripts as well as registering the custom block type. I'll take this step-by-step so it's easy to follow. The empty function should look like this:
```php:title=blocks/blocks.php
<?php

/**
 * Enqueue scripts for custom blocks
 */
function custom_block_scripts() {
  // Do something...
}
add_action('enqueue_block_assets', 'custom_block_scripts');
```

After creating the function, you'll use a hook to call the function. Since adding Gutenberg to WordPress core, a new hook has been added called `enqueue_block_assets` which exists exactly for this purpose. 

### Enqueue the scripts and styles for the custom blocks

The next thing you need to do is include the scripts for the custom blocks you're creating. This can be done using `wp_enqueue_script()` just like you'd do in a custom theme. This should go inside the `custom_block_scripts()` function like so:

```php:title=blocks/blocks.php
<?php

/**
 * Enqueue scripts for custom blocks
 */
function custom_block_scripts() {
  // Add custom Gutenberg block scripts
  wp_enqueue_script(
    'custom-block-scripts', 
    get_template_directory_uri() . '/dist/js/blocks.js', 
    array(
      'wp-blocks', 
      'wp-components', 
      'wp-element', 
      'wp-i18n', 
      'wp-editor'
    ), 
    '1.0.0', 
    true);
}
add_action('enqueue_block_assets', 'custom_block_scripts');
```

In the code above, you may notice that I have listed an array of dependencies. This is required for any WordPress components you want to use in your blocks. The ones I have listed here are the ones I find myself using most often. A full list of [packages that are available can be found here](https://github.com/WordPress/gutenberg/tree/master/packages). At a minimum, you need `wp-blocks` to register a block. The rest of the `wp_enqueue_script()` function should look pretty familiar if you've done theme development before. In case you haven't, here's a quick breakdown of the arguments:

```php:title=wp_enqueue_script
<?php

wp_enqueue_script( $nickname, $location, $dependencies, $version, $in_footer );
```

### Register the actual custom block types

Now that you have the scripts added, you need to use `register_block_type()` to tell WordPress what to do with the code. It should be noted that the `$args` array will use the nickname you chose in the previous step to identify the script or styles you want to use. Again, WordPress added a custom function to do this called `register_block_type()` with the following arguments:

```php:title=register_block_type
<?php

register_block_type( $namespace, $args );
```

Based on the way you have set up the blocks so far, this is how your `register_block_type()` function will look:

```php:title=register_block_type
<?php

register_block_type(
  'iamtimsmith/blocks', 
  array(
    'editor_script' => 'custom-block-scripts', // The script you enqueued earlier
  )
);
```

The code above should go in the same `custom_block_scripts()` function where you are enqueuing your scripts. After you have set this up, your custom function should look like this:

```php:title=blocks/blocks.php
<?php

/**
 * Enqueue scripts for custom blocks
 */
function custom_block_scripts() {
  // Add custom Gutenberg block scripts
  wp_enqueue_script(
    'custom-block-scripts', 
    get_template_directory_uri() . '/dist/js/blocks.js', 
    array(
      'wp-blocks', 
      'wp-components', 
      'wp-element', 
      'wp-i18n', 
      'wp-editor'
    ), 
    '1.0.0', 
    true);

  // Register custom block types
  register_block_type(
    'iamtimsmith/blocks', 
    array(
      'editor_script' => 'custom-block-scripts',
    )
  );
}
add_action('enqueue_block_assets', 'custom_block_scripts');
```

### Telling functions.php about the custom blocks

The final step for registering blocks in your theme is to add a call to the `functions.php` file. This will simply tell your theme that the file exists in the blocks directory and the content should be pulled in. While this step is relatively easy, it is also required for this to work. If you are running into issues with your custom blocks not showing up at all, I'd double check and make sure you added the call to your `functions.php` file. Adding the code below will tell your theme about the registered custom blocks:

```php:title=functions.php
/**
 * Add custom blocks for gutenberg
 */
require get_template_directory() . '/blocks/blocks.php';
```

Although it doesn't matter where in your `functions.php` file you place the code, I tend to put it at the bottom. Especially if you're using the underscores theme, it helps to keep your code separated from the default theme code.

<div style="max-width:400px; margin: 0 auto;">

![You have taken your first step into a larger world](./benkenobi.jpg)

</div>

## Wrapping Up

That's as much as I'm going to cover in this article. You have now registered the namespace and scripts where your custom blocks will live. In the next post in the series, I'll be going over a gulp setup which allows you to use JSX when building your custom blocks. Using JSX makes blocks easier to read and can make your life easier as a developer. If you're not familiar with gulp, I'll teach you some basics to get your custom blocks up and running and provide you with a jumping off point to add more optimizations.

Have thoughts or questions? You can reach me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).