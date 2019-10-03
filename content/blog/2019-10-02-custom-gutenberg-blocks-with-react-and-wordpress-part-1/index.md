---
title: 'Creating Custom Gutenberg Blocks with React and WordPress - Part 1'
date: '2019-10-02'
tags: '#wordpress, #react'
featured_image: ./featured_image.jpg
keywords: 'wordpress, react, wordpress and react, gutenberg, custom gutenberg block'
description: "I'll show you how to create custom Gutenberg blocks using WordPress and React. This post will cover the basics and a simple setup to start developing."
published: true
---

As of WordPress 5.0, Gutenberg comes built-in. In this post, I'll give you the basics of what Gutenberg is, why it's awesome, and how to set up your environment to start creating your own custom Gutenberg blocks. While at least some knowledge of React will be useful, it is not totally required.

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

### Register custom block types

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