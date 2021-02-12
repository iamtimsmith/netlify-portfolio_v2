---
title: 'Using the Pug Templating Engine  Part 1 - Markup'
date: '2021-01-14'
tags: '#misc'
featured_image: ./featured_image.jpg
keywords: 'Freelance, grow client base, pandemic'
description: "If you’re about to launch a web-based project, whether it’s for a small or large business, the following are the team members you simply can’t do without."
published: true
---

If you've ever used something like Drupal, Laravel, or Adonis, you've likely encountered a template engine. A templating engine is a tool that a framework can use to assist in scaffolding a front-end for a website or webapp. The engines used in the aforementioned tools are Twig, Blade, and Edge, respectively. These languages allow you to write HTML like structures while retaining the ability to insert variables and use logic within the structure. Today I will be talking about one of the most popular templating languages for Node.js applications, Pug.

Pug, formerly known as Jade, released it's 1.0.0 version on December 22, 2013 after being in development for a few years. It has become a widely used templating engine for many websites, and for good reason: If you know how to write HTML, this will feel like a shorthand version of it. The key to writing Pug is indentation because when Pug is compiled into HTML, the indentation is how it determines how to nest the elements. There are some other items that make it a little different when writing it, but the elements, attributes, and structure are all the same as standard HTML.

## How to create elements in Pug

Creating markup for a webpage in Pug may feel a bit strange at first, but after a bit will start to feel pretty intuitive. Part of this is due to the fact that you don't have to worry about closing tags, which can help lead to much cleaner files. Let's start by creating an `h1` that says 'Hello, Pug'.

```jsx
h1 Hello Pug
```

Believe it or not, the code above will create an h1 tag with the text "Hello Pug" inside. Pretty quick, right? Now, lets add a `p` tag (as a sibling, not a child) that says "What a beautiful day!". See if you can do it without looking at the next bit of code! When you're ready, here's what the code looks like for that:

```jsx
h1 Hello Pug
p What a beautiful day!
```

## Adding Classes and IDs to elements

What if we want to add a class to the `p` tag so we can give it some specific styles? If you're familiar with the tool called emmet, this will feel very familiar. If not, that's totally okay too. This won't take long to get used to either. To add a class to the `p` element, you can just add the selector you'd use in CSS to the element like so:

```jsx
h1 Hello Pug
p.some-selector What a beautiful day!
```

Adding an ID to a tag works pretty much the same way. If you wanted to add an ID to the h1 tag, you could do it like so:

```jsx
h1#some-id Hello Pug
p.some-selector What a beautiful day!
```

What if you have several classes you need to add? Pug's got you covered there too. Rather than adding the selector after the element, you can put an opening and closing parenthesis and write the class inside as though you were writing classes out on an element in HTML. There is one BIG difference though... Pug can accept the list of classes as a string (like HTML) or as an array, which can come in handy when getting a list of class names from JavaScript. The example below shows how you can write an element with multiple classes as both an array and as a string.

```jsx
div(class="box box-shadow") Some content
// or
div(class=['box', 'box-shadow']) Some content
```

## Adding other attributes

Okay, cool... but what if you need to add more than one attribute? We'll add an image with a `class`, `src`, and an `alt` tag. Adding attributes of any kind can be done this way, even classes and IDs. It should feel very similar to how they are written when adding them to an element in standard HTML. In the example below, you can see how to add attributes to an element.

```jsx
h1#some-id Hello Pug
p.some-selector What a beautiful day!
img(class='image' src='https://placeimg.com/300/300' alt='Test Image')
```

## Using an object for attributes

In some cases, you may want to use an object of attributes rather than writing each one out. This could be useful if you're getting attribute data from JavaScript and just want to be able to pass it into the element as-is. Perhaps you are programmatically building attributes that only one or two things changed on each iteration, who knows? Either way, attributes can be passed to elements as objects by using what's called the `&attributes` or "and attributes". This technique should be used with some caution because data being passed in this way is not sanitized at all and should be take care of before being used. Below is an example of an `&attribute` for the image we created.

```jsx
h1#some-id Hello Pug
p.some-selector What a beautiful day!
img&attributes({class:'image', src: 'https://placeimg.com/300/300', alt: 'Test Image'})
```

## Why is nesting important?

There's one more concept I would like to cover in the basics, and that is nesting. I mentioned earlier that this is how the compiler determines how the DOM should be structured as far as parents and children are concerned. To illustrate this, I will put a `figure` element around the `img` element I just created.

```jsx
h1#some-id Hello Pug
p.some-selector What a beautiful day!
figure
	img(class='image' src='https://placeimg.com/300/300' alt='Test Image')
```

The code above doesn't look much different than it previously did, but it makes a difference in the final markup. I added a `figure` element below the `p` tag and then indented the image beneath the `figure`. Anything that is indented once below the `figure` tag will be a direct child of that tag. Had I placed the `img` without any indentation, it would have showed up as a sibling to the `figure`. This is why indentation is so crucial for determining structure in Pug.

## Wrapping Up

While this has been a pretty quick introduction to templating with Pug, it should give you a basic understanding of how it compares to HTML and how it can be very beneficial in terms of readability and speed. In [the next post](/blog/using-the-pug-templating-engine-part-2-logic), I will show you how you can use variables and logic in your templates to make them extremely dynamic. 

If you have any questions or run into issues, you can find me on Twitter [@iam_timsmith](https://www.twitter.com/iam_timsmith).