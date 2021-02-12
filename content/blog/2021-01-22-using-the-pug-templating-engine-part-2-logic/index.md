---
title: 'Using the Pug Templating Engine  Part 2 - Logic'
date: '2021-01-22'
tags: '#misc'
featured_image: ./featured_image.jpg
keywords: 'pug, nodejs, templates'
description: "Today I'm going to show you how you can use variables and logic in your templates to make them dynamic and flexible to allow you to display data however you need."
published: true
---

In [my previous post](/blog/using-the-pug-templating-engine-part-1-markup), I showed you how to create elements in Pug with classes, ids, attributes, and nesting. Today I'm going to show you how you can use variables and logic in your templates to make them dynamic and flexible, allowing you to write one template to hold lots of different pieces of information that are all formatted the same rather than writing out a separate HTML file for each one. Without further adieu, let's get started!

<video src='https://media.giphy.com/media/cfUMNY4RfGhEc/giphy.mp4' autoplay muted loop playsinline></video>

## Creating and using variables within Pug

Using JavaScript inside a `.pug` file is very easy to do since it is a JavaScript templating language. Unlike php, where the code to be executed needs to be wrapped in a `<?php ?>` tag, all that's needed to set up a variable in Pug is a hyphen. If you then just want to put that variable into the DOM as-is, an equals sign can accomplish that. Though the example below isn't practical, it helps to  show how variables can be set and used in their simplest form.

```jsx
- const greeting = 'Hello, Tim'

p= greeting

// renders <p>Hello, Tim</p>
```

Variables created this way can be of any data type that can be used in JavaScript. Below is another example where the variable is creating an array of classes which should be applied to an element. This will illustrate how variables can be used as attributes.

```jsx
- const classes = ['class-1', 'class-2']

div(class=classes) Hello

// renders <div class="class-1 class-2">Hello</div>
```

That's pretty cool, but what if I want to put it into a message to make, for instance, a more dynamic greeting? That can be accomplished using a string literal in the content for the element. The code below shows how this can be done.

```jsx
- const name = 'Tim'

p Hello, #{name}

// renders <p>Hello, Tim</p>
```

In addition to just being able to print out the data from a variable, you can also manipulate it the same ways you could in plain JavaScript. This can come in handy if you're trying to make sure that all names are formatted the same or that all numbers are formatted the same. Below is an example of how you can render the variable just like it is above but in uppercase letters.

```jsx
- const name = 'Tim'

p Hello, #{name.toUpperCase()}

// renders <p>Hello, TIM</p>
```

Having the ability to use JavaScript right in the templates makes them even more flexible because you can format things (in many cases) as it's being rendered rather than having to pass the variable through several steps before it is ready to display.

## How do you use conditional logic?

As nice as it would be, users don't always fill out forms as much as we'd like. In those cases, we don't want the interface to show a message that just says "Hello, ". That would be pretty confusing to a user. To fix this, I will create some logic to display different messages depending on whether the name exists. The code for this can be found below.

### If-Then statements

```jsx
- const name = ''

if name
	p Hello, #{name}
else
	p Howdy, partner!

// renders <p>Howdy, partner!</p>
```

The conditional you see above is a simple, but common example of how logic can be used in templating. Similar to how elements are nested, you can see that conditional logic also uses indentation to determine what goes inside the if-then statement. The example shows an `if` statement with a check to see if the variable has a value. If so, it runs the code indented beneath it. If it evaluates to `false`, it will move to the `else` block where it runs the code indented below.

### Switch Statements

If you have more than one path you need to evaluate for, you can also use a `switch` statement in Pug. If you've never used a switch statement, it allows you to provide a piece of data to evaluate. Inside the switch statement, you create "cases" where you provide as many possible matches (as well as a default) for the data being evaluated. Once a match is found, the switch statement executes whatever code is inside the case statement. If no match is found, the default case is used.

Below is an example of how to use a switch statement in a Pug template. In this template, I have created a case which looks at `userId` to determine which user to greet. The variable is set to `1`, so when the switch statement executes it will follow the `when 1` path. If the `userId` variable were set to `4`, it would follow the default path since no specific case is set for that.

```jsx
- const userId = 1

case userId
	when 0
		p Hello, John
	when 1
		p Hello, Tim
	when 2
		p Hello, Rita
	default
		p Howdy, partner

// renders <p>Hello, Tim</p>
```

## Loops

Another common practice when setting up a dynamic webpage is looping over data. This is often done for menus, lists of data, or creating galleries. Writing a loop will feel similar to writing an if statement, in that we put our logic on one line and the code that should be executed is indented on the line below. The following example shows how you can render a grocery list from an array of items.

```jsx
- const groceries = ['apple', 'banana', 'popcorn', 'pizza']

ul
	each item in groceries
		li= item

// renders:
//   <ul>
//     <li>apple</li>
//     <li>banana</li>
//     <li>popcorn</li>
//     <li>pizza</li>
//   </ul>
```

### Looping over objects

Pug includes a really handy feature that is not as straightforward in regular JavaScript: iterating over objects. Fortunately, Pug allows you to do this in pretty much the same way as looping over an array, which makes it really easy to render key/value pairs if needed. This could be useful if the key is an element id and the value is the content for the element or other situations like that. If you need to iterate over an object, you can follow the example below.

```jsx
- const foods = {fruit: "Kiwi", vegetable: "Carrot", dairy: "Milk", candy: "Snickers"}

ul
	each food, category in foods
		li My favorite #{category}: #{food}

// renders:
//   <ul>
//     <li>My favorite fruit: Kiwi</li>
//     <li>My favorite vegetable: Carrot</li>
//     <li>My favorite dairy: Milk</li>
//     <li>pizza</li>
//   </ul>
```

## Wrapping Up

The ability to write JavaScript code in templates is a game changer both in terms of cleaner code and dynamic content. In this post, I've demonstrated some of the most common ways to use logic inside your templates when using Pug as a templating engine. In the next post, I'll show you how to simplify your templates using a DRY, or Don't Repeat Yourself, approach which will save time and effort.

Have questions? You can reach me on Twitter [@iam_timsmith](https://www.twitter.com/iam_timsmith).