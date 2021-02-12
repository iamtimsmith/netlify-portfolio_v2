---
title: 'Creating a Basic Server with Express.js'
date: '2020-02-12'
tags: '#express'
featured_image: ./featured_image.jpg
keywords: 'expressjs, nodejs, mern, mern stack, javascript'
description: "I'm going to show you how to create an Express.js server. We will go over starting the server, setting up simple routes, and outputting various types of data."
published: true
---

In this post, I'm going to show you how to create a basic Express.js server for your web applications. We will go over starting the server, setting up simple routes, and outputting various types of data.

Node.js burst onto the scene in 2009 when Ryan Dahl pulled the JavaScript engine out of a browser and put it onto a server. Unlike other back-end technologies such as PHP or Java, Node.js isn't a language. It's a runtime environment which allows a server to interpret and run JavaScript code like a browser would.

The ability to use JavaScript for a back-end was a game changer, although it wasn't without challenges. Using it as a back-end required configuration and a lot of code, making it challenging to get up-and-running in a short amount of time. To combat this, [Express.js](http://expressjs.com/) was created in 2010 to give developers tools to stand Node.js back-ends up in no time.

## What is Express.js?

Express.js is a framework for Node.js to provide developers with robust tools for building a back-end for a website or web application. It includes routing, simple setup for templating, and many more benefits. Because of it's maturity and ease of use, Express.js has been the most popular Node.js framework for years. There are even other Node.js frameworks built on top of it, such as [Sails.js](https://sailsjs.com/), [Koa.js](https://koajs.com/), and [Nest.js](https://nestjs.com/).

Despite the number of tools it provides, it is a very unopinionated framework. The ability to structure your back-end any way you want means that it can be as flexible as you need it to be. For this reason, it is a staple in many developer's toolkits. Express.js gives us the "E" in the MEAN stack, MERN stack, or MEVN stack. Now that you have a better understanding about what Express.js is, let's build something with it!

## Setting up the initial project

Before you can start using Express.js to build a back-end you need to set up your project folder, add your dependencies, and initialize your git repository (assuming you're using git). First, create the folder and enter it with the command below:

```bash:title=Terminal
$ mkdir basic-express && cd $_
```

Once inside the newly created project folder, you need to initialize npm and set up dependencies. Although you can fill out all of the details in your `npm init`, I don't really care about that for the sake of this tutorial. I'm going to run the following command to set up npm with the default scaffolding.

```bash:title=Terminal
$ npm init -y
```

After the `package.json` file is created, you can add the necessary dependencies which are listed below. Before moving forward, let's talk a bit about why we are installing these packages. The `express` package is the framework you are using for routing, templating, and more. `body-parser` allows you to get the body from an http request and use the data in your application. In this tutorial, I've decided to use [Pug](https://pugjs.org/api/getting-started.html) for templating although there are many different options you could use. Pug is simply a popular option and easy to use.

```bash:title=Terminal
$ npm i express body-parser pug
```

The next step to perform is [setting up your git repository](/blog/take-snapshots-of-your-project-with-git). This is an optional step depending on whether you are using git for version control. If you are using git, I also recommend adding a `.gitginore` file to exclude the `/node_modules` directory from the repo. Keeping the node_modules directory will bloat your codebase and will cause problems with git. The code for the `.gitignore` is below:

```txt:title=.gitignore
node_modules
```

## Creating the Express server

The first file you have to create in your express project is going to be a server file. The purpose of this file is to set up any middleware you'll be using, configure a templating engine, create the server itself, and more. You could also put your routes in this file, but in my opinion that gets pretty messy if you have any more than 1 or 2 routes. You can call the server file whatever you want, although it is often called `app.js` or `server.js`. I will be calling mine `server.js` in this project.

```bash:title=Terminal
$ touch server.js
```

Open your newly created file and you can begin building a simple server. At first, we will import express and designate a port on which our server can run. Inside your server file, add the following code:

```js:title=server.js
const express = require('express');
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
```

Let's take a closer look at what's going on here. Line 1 imports the express library into the project. Line 2 creates instantiates express inside a variable called `app`. I am creating a variable for my port on line 3 so I can change it in one place and have it updated anywhere I'm logging or using it.

Once those variables are set, you can create the server by using `app.listen()`. First, pass in the port at which you want the server to run. This can be any value as long as it's an integer. After the port, can provide a callback. In this case, I've used the callback to log a message to the console indicating the server is running. This isn't required, but I like having the message to indicate that the terminal is working as expected.

## Setting up routes in express

Before setting up routes, you need to include the body-parser package we included so express can use the information coming from the http request. To do so, modify the server file like so:

```js:title=server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Add the bodyParser middelware to the express application
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
```

Now that Express can parse the http requests, you can set up your routes. I mentioned earlier that you can place your routes in the server file. I'll show you how to do it that way and then how to do it my preferred way.

### Putting routes in the server file

Express allows you to use the app variable with a method for the desired request type to establish routes. To illustrate this, you'll add 2 GET routes to the server file then start the server and navigate from one to the other.

```js:title=server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

// Set up home route
app.get('/', (req, res) => {
  res.send("This is the homepage");
})
// Set up second page
app.get('/second', (req, res) => {
  res.send("This is the second page");
})

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
```

To start the server, run `node server.js` in your terminal. You should see the console log in the `app.listen()` callback indicating that the applicatino is running on port 4000. Once the server is started, you can navigate to [http://localhost:4000](http://localhost:4000) and you'll see a page with text that says "This is the homepage". This is the `/` route. If you visit [http://localhost:4000/second](http://localhost:4000/second), you'll see the "This is the second page" text.

For now, the server file doesn't look bad. As your application grows, you will need more and more routes which will eventually result in the file becoming a mile long, which drives me nuts. If you prefer to keep everything in one file, by all means, do it. This is just my personal preference.

### Using controllers and a routes file

When building an application using Express.js, I prefer to stick with an MVC architecture. If you're unfamiliar with this, it stands for model-view-controller. It is an architectural pattern that has been around for a long time and there's lots of information. To put this into the most basic, oversimplified terms possible:

  - **Model** - The data in our application
  - **View** - The stuff that the user sees
  - **Controller** - What the routes should do

I will be using this sort of structure in this tutorial, although we won't have any models. Those can set up using various tools, known as ORMs, to connect databases. For this project, I will use a controller to simplify routing and pug for the views. First, let's set up a controller.

```bash:title=Terminal
$ mkdir controllers && touch controllers/BasicController.js
```

Now you can open `BasicController.js`. This file will begin with a module.exports and we will be exporting an object of methods which make up the controllers. If this is confusing, the code below may help to explain a bit better:

```js:title=controllers/BasicController.js
module.exports = {
  home: (req, res) => {
    res.send("This is the home page");
  },
  second: (req, res) => {
    res.send("This is the second page");
  }
}
```

The `module.exports` makes this object available to other pieces of the application. Inside the object, we have the first key (home) which is a function. When setting up a route in express, the callback function takes a request (`req`) and response (`res`) parameter. The request allows you to get information about the request being made to the server and the response allows you to determine what the response will be.

Now that you have a controller set up, a file needs to be created for the routes:

```bash:title=Terminal
$ touch routes.js
```

The `routes.js` file will house all of the routes for the project. Using controllers helps to keep this file clean since you can just tell Express what controller and method you want to use for the callback. Setting up a route goes from (potentially) many lines to a single line, making it quick and easy to tell what routes are doing what things. The code below illustrates what a routes file should look like given this setup:

```js:title=routes.js
const express = require('express');
const router = express.Router();

const basic = require('./controllers/BasicController.js');

router.get('/', basic.home);
router.get('/second', basic.second);

module.exports = router;
```

First you import the express library and the `Router()` method. Next, import any controller files being used in your routes. In this case, you only have a `BasicController.js` file. After that, you can begin setting up the routes. Since the routes are in a separate file from the `app` variable, you will use the `router` variable just like you did with `app`. Finally, the router variable with the new routes needs to be exported for use in the server file.

You're almost ready to test this out! The last step to get this working is to modify the server file, like so:

```js:title=server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
// Specify the url prefix and import routes
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
```

The line of code you added above says, "use this middleware, use the prefix of `/` for any routes in the controller, and use the routes file for the routing. This prefix could be whatever path you want at the beginning of the routes in the route file. In this case, I want the routes be at the root level instead of having a prefix, so I used `/`. Adding prefixes could be useful for apis or other such tools.

Now if you run `node server.js`, you'll see the same output as before because the servers work the same way. In my opinion, handling routes this way is much more legible and scalable.

## Adding views with pug

Now you have set up a server, created controllers to handle the requests, and set up routes to make the data available to users. The last step to get a basic express server set up (assuming you want to output some sort of front-end and not just an api) is to set up a template engine for views.

Since pug is already installed, we can just tell Express to use that as a templating engine. By default, it will look for the views in a `views/` folder, so no further configuration is needed there.

```js:title=server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Set up pug as view engine
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
```

Now that the view engine is set up, you can start creating the views. In this tutorial, I'm going to create a couple of really basic pug files for the views. Pug offers all kinds of cool features which makes it great for building front-ends, but I won't be covering that here. To begin setting up the views, create a views folder and then create files for each of our views.

```bash:title=Terminal
$ mkdir views && touch views/home.pug views/second.pug
```

Pug allows you to write a sort of simplified html. It eliminates the need for opening and closing tags, but means that indentation is crucial. To make things simple, I've placed the code for both of the view files below. They are pretty much the same with the exception of the page name.

```pug:title=views/home.pug
html
  head
    title Homepage
  body
    h1 This is the homepage
    p Here is some text for the homepage. This is pretty awesome!
    a(href="/second") Go to the second page
```

```pug:title=views/second.pug
html
  head
    title Second Page
  body
    h1 This is the second page
    p Here is some text for the second page. This is pretty awesome!
    a(href="/") Go to the home page
```

The final step to adding views is to update the methods you created in the `BasicController.js` file. You can update `res.send()` to `res.render()`. The first argument you pass into `res.render()` is the name of the file in the views folder you want to render. The optional second parameter is an object which contains any variables you want to pass into the template. In this case, I won't worry about variables. The updated controller code is below. Once that has been updated, you can run `node server.js` and give the application a try. You should see a title, some text, and a link to the other page for each page.

```js:title=controllers/BasicController.js
module.exports = {
  home: (req, res) => {
    res.render('home');
  },
  second: (req, res) => {
    res.render('second');
  }
}
```

## Conclusion

Congratulations! You now have a working express application complete with routing, controllers, and views. You can add more items as you see fit to continue and build on your app. Next steps would be adding a database with models, setting up authorization for users, and setting up private routes. Now go forth and create great things!

> This is the first in a series of posts about setting up a project with Express.
> 1. Creating a Basic Server with Express.js
> 1. [Using MongoDB with an Express.js project](/blog/using-mongodb-with-express-js)
<!-- > 1. [Adding Authentication to an Express application with Passport.js](/blog/adding-auth-to-express-application-with-passport) -->

Have thoughts or questions? You can reach me on Twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).
