---
title: 'How To Build A Blog with Wordpress and Gatsby.js - Part 1'
date: '2019-03-24'
tags: '#reactjs #wordpress'
featured_image: ./featured_image.jpg
keywords: 'react js, reactjs, javascript, wordpress, wordpress plugins, gatsbyjs, gatsby js'
description: 'Ever wondered how to use Gatsby js with WordPress? This post will cover everything you need to know about getting WordPress ready for a Gatsby site.'
published: true
---

<article class="message">
  <div class="message-body">
    Note: This is part one in a series of posts about Gatsby.js and WordPress. You can find <a href="/blog/how-to-build-a-blog-with-wordpress-and-gatsby-part-2">Part Two here</a>, and <a href="/blog/how-to-build-a-blog-with-wordpress-and-gatsby-part-3">Part Three here</a>.
  </div>
</article>

Ever wondered how to use Gatsby js with WordPress? This post will cover everything you need to know about getting WordPress ready for a Gatsby site.

In a [previous post](/blog/using-wordpress-with-react/), we spoke about using React js to build a front-end for a WordPress site. We talked about a simple setup to do this, but also mentioned some drawbacks to doing this.

One such drawback is the difficulties faced when trying to rank for SEO, because search engine crawlers have a hard time indexing information being loaded into React. I mentioned briefly that there are ways around this and one of these ways is [Gatsby.js](https://www.gatsbyjs.org/).

In this series of blog posts, we'll be talking about how to build a Gatsby js site with a WordPress back-end. The aim of the setup is to allow non-developer users to make changes on their website while allowing developers to use a fast, modern, and enjoyable tool to build with.

<video src="https://media.giphy.com/media/3o7ZeTmU77UlPyeR2w/giphy.mp4" playsinline autoplay muted loop></video>

## Why Use Gatsby js with WordPress At All?

When I made my last post about using React js with WordPress, a few people asked why one might do such a thing?

There are a few reasons that creating a separate front-end in React js is beneficial:

First, it really allows a lot of customization for the developer to choose tools that will a) benefit the site most and b) create an enjoyable development experience. And let's be honest, as developers aren't we all looking for better dev experience?

Second, I believe that plugins are a double-edged sword. They allow some cool functionality which otherwise wouldn't exist for non-coders, but people get slap-happy with them and start putting them on. I've seen sites with more than 60 plugins activated at once and they wondered why their site was so slow! Having 60 different plugins could mean having a ridiculous amount of http requests being sent because each plugin is loading a new library. Using a separate front-end means the developer is in control of this. It does mean that the client will have to pay to have some changes made, but at the same time it will ensure that the site is staying optimized and that a developer can make the change without adding a bunch of unnecessary junk.

<video src='https://media.giphy.com/media/CBFgxojcXwac/giphy.mp4' playsinline autoplay muted loop width="400"></video>

Third, I've seen cases where the developer and designer create an amazing site for a client and then the client decides to start poking around trying to change something minute like font-size from 12px to 14px and ends up taking the whole site down. This is an extreme example, but it definitely happens. If the front-end is a totally separate entity, then the client doesn't have the ability to do so.

Finally, WordPress powers something like 1/3 of the internet. What this means is there's a lot of people who know how to figure out if a site is a WordPress site so they can hack it and steal information. They can write bots which check various pieces of information about the site and determine if it's a WordPress site. The benefit to using something like Gatsby js is that it creates static files at build time and serves the static html, so users and bots will never know there's a WordPress site managing the content.

## What is Gatsby js?

Now that we've talked about why it is beneficial to use a setup like this, let's talk about what Gatsby.js is.

According to their site, "Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps". In other words, it allows you to develop a website using React and just about any content source you want. Then at build time, it pulls in all of the data from the specified sources and turns your site into a bunch of static html files that are optimized for performance.

As a matter of fact, [my portfolio site](https://www.iamtimsmith.com) is built using Gatsby and markdown files. It's a great way to build performant websites in React without having to worry about crawlers being able to index your site. In addition, it's got some pretty awesome documentation and community around it.

Now let's get down to business...

<video src="https://media.giphy.com/media/xUOwGmsFStnxzIGC2s/giphy.mp4" playsinline autoplay muted loop width="400"></video>

## Setting Up WordPress

This article assumes you have at least a rudimentary knowledge of WordPress. If you've never used it, you can check out [my quick guide to setting up a WordPress site](/blog/how-to-build-a-beautiful-website-in-less-than-10-minutes/).

## A bit about WordPress as a CMS

Wordpress is a Content Management System built using PHP and MySQL. Typically when building a WordPress site, we would build a theme that would essentially act as a "skin" for the content. Since we're using Gatsby to build the front-end, we won't be using this functionality.

As I mentioned in my other blog post, WordPress exposes REST apis which can be used to get data for our React application. This same principle will be used here, although we'll be adding some things to improve the REST api and make it more flexible.

I also like to use WordPress at a subdomain such as `admin.example.com` so it is totally separate from the actual site.

![Underscores Theme](./underscores.png)

## The WordPress Theme

Since we are not worried about how the site looks in WordPress, the theme we use doesn't necessarily matter. The only two files we really need in the theme are the `style.css` file to tell WordPress the information about our theme and the `functions.php` file so we can create menus, create custom content types, create default Advanced Custom Fields, etc. Later on, we can add more files to the theme for page templates, but that's totally optional.

When building WordPress sites I generally stick with the [Underscores](https://underscores.me/) theme, so we will use that as the starter today since it already has a lot of stuff set up out-of-the-box.

## The WordPress Plugins

I know I was on my soap box earlier about using a bunch of plugins, and generally I'm not a huge fan of them. There are a few plugins that can really make our life easier as developers though.

### Advanced Custom Fields

The first plugin I'd like to mention is [Advanced Custom Fields](https://www.advancedcustomfields.com/), or ACF. This is perhaps one of my favorite plugins of all time since it allows us to create custom fields for any post type or page. We can override defaults. We can create any number of fields for the user ranging from WYSIWYG editors and date pickers (free) to galleries and repeater fields (pro). With this tool, we can truly customize the site to be exactly what our client needs.

### ACF to REST API

Another plugin that works hand-in-hand with ACF is called [ACF to REST API](https://github.com/airesvsg/acf-to-rest-api). I bet you already guessed what it does. It exposes the data from our custom fields to the REST api so we can use it in our Gatsby js site.

### WP API Menus

One of the great functions in WordPress is the ability for users to easily create and update menus for their site. If we hardcode the menu into our Gatsby site, it removes this ability for our users. To make it flexible for them, we can install the [WP API Menus](https://github.com/unfulvio/wp-api-menus) plugin to create REST routes for the menu items. Please note: According to the [gatsby-source-wordpress docs](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress), it must be this version of the plugin and not the newer one. The newer version will not work.

### WP Trigger Netlify Build

When I build a Gatsby website, I like to use Netlify to handle the deployment of the site. Netlify rebuilds whenever a new commit is pushed or merged to the master branch of the repository, but what about when someone updates their WordPress site?

Netlify has the ability to create webhooks that we can grab to say, "Hey, there's new content so you need to rebuild". I built [WP Trigger Netlify Build](https://github.com/iamtimsmith/wp-trigger-netlify-build) to make this super easy to integrate with WordPress. Simply drop in the necessary information and it will tell Netlify to rebuild when changes are made. It even shows a badge with the status of the build on the dashboard.

<video src="https://media.giphy.com/media/qyX9oq2ZmsPwk/giphy.mp4" playsinline autoplay muted loop></video>

## We Have Themes and Plugins, Now What?

Not to be too anti-climactic, but there's really not a ton more to do on the WordPress side other than create content. These plugins and theme will pretty much expose everything we need to build our Gatsby js blog.

That being said, if we are creating custom content types for our blog we will need a way to differenciate them in ACF. Creating a custom page template will serve this purpose so we can filter on the page template to show the custom fields. We can also use the page template to filter in our Gatsby project to make sure we are receiving the desired fields for a given page.

<br /><br />

If you have any questions, you can hit me up on twitter at [@iam_timsmith](https://twitter.com/iam_timsmith)!

See you in [How To Build A Blog with Wordpress and Gatsby.js - Part 2](/blog/how-to-build-a-blog-with-wordpress-and-gatsby-part-2)!
