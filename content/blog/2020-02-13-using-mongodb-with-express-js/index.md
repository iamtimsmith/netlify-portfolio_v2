---
title: 'Using MongoDB with an Express.js Application'
date: '2020-02-13'
tags: '#express #mongodb'
featured_image: ./featured_image.jpg
keywords: 'expressjs, nodejs, mern, mern stack, javascript, mongodb'
description: "MongoDB is a nosql database that is growing in popularity. In this post, I'll show you how you can use it in your next Express application."
published: true
---

MongoDB is a nosql database that is growing in popularity. In this post, I'll show you how you can use it in your next Express application. The MERN stack (MongoDB, Express, React, Node), MEAN stack (MongoDB, Express, Angular, Node), and MEVN stack (MongoDB, Express, Vue, Node) all use MongoDB as a database since it's so easy to read information. Let's get right into it!

## What is MongoDB?

SQL is a type of database that has been around for a long time and allows tables to be relational. NoSQL databases, such as MongoDB, are a type of non-relational databases which can use various data structures. MongoDB uses a document structure which ends up looking like a JSON object with key/value pairs.

Like SQL, it can be used locally or from a remote platform. When using it locally, it will store the data in a specified location, but won't work until you run `mongod` in the terminal. In recent years, platforms such as [mLab](https://mlab.com/) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). In this tutorial, I'll be using mLab although it doesn't matter which one you choose as long as you have the connection url.

<video src="https://media.giphy.com/media/XHGAZo1d0vlSsWXEZP/giphy.mp4" loop muted autoplay playsinline width="300"></video>

## Adding new packages to the Express Application

I will be continuing with the project from the [last post in the series](/blog/creating-a-basic-server-with-express-js). The code for that project can be found [here](https://github.com/iamtimsmith/express-tutorials). As a brief overview, the project so far has a few basic routes set up with controllers, is being served at port 4000, and is using pug as a view engine.

To begin adding MongoDB to the project, you should add a few packages: `dotenv` and `mongoose`. Dotenv allows us to use environment variables in a `.env` file. Get it? Dot-E-N-V? Pretty clever, huh? Mongoose is an Object-Relational-Mapper, or ORM, which converts the data from your MongoDB to something the Express application can use. I will be [using the terminal to do various things](/blog/getting-started-with-the-linux-cli/), though you can use whatever method you like. Finally, slugify allows you to turn a string into a url slug. The code below will add these packages to your project:

```bash:title=Terminal
$ npm i dotenv mongoose slugify
```

Assuming you have set up your database, whether locally or remotely, it's time to create a `.env` file. The code below will create the file:

```bash:title=Terminal
$ touch .env
```

Inside the .env file, you need to add a key and value for the url. The reason for using a .env file is twofold. First, the database location isn't hardcoded in the project which makes things far more secure. Second, different values can be used for different environments, thus making sure that development isn't affecting data in the production environment. I will use the code below in my `.env` file. Please note: the connection string below will not work. It is simply to show what it will look like.

```md:title=.env
MONGO_URI=mongodb://username:password@ds12345.mlab.com:54321/iamtimsmith-express-tutorial
```

The next step (if not already done) should always be to add the `.env` file to the `.gitignore`. This is a VERY important step and ensures we aren't making any valuable data public. This is especially important since the username and password for the database is in the connection string, although it's good practice to always add `.env` files to the `.gitignore` regardless of what the contents are.

```md:title=.gitignore
node_modules
.env
```

Whew. Now you've got a `.env` file with the connection string for the database. You have also made sure it's not being pushed into a repository. The next thing you need to do is tell the Express application about the `.env` file and use it to connect to the database. To do this, open the server file and add the following lines:

```js:title=server.js
const express = require('express');
const bodyParser = require('body-parser');
// Include mongoose in the server file
const mongoose = require('mongoose');
const app = express();
// Tell the server file about the .env file
require('dotenv').config();

const port = 4000;
// Use the MONGO_URI from .env or use local mongodb
const db = process.env.MONGO_URI || "mongodb://localhost:27017/express-tutorial"; 

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});

// Connect the Express application to MongoDB
mongoose.connect(db, {useNewUrlParser: true});
```

The code above adds the mongoose package to the file, gets the connection string for the database, and connects to MongoDB using the url assigned to `db`. We're done right? Well.....

<video src="https://media.giphy.com/media/s3d5ugcxFDApG/giphy.mp4" autoplay loop muted playsinline width="250"></video>

## Setting up Models with Mongoose

I mentioned in the [last post](/blog/creating-a-basic-server-with-express-js) that I'm using an MVC architecture. The Express project already has views and controllers. It's just missing the models, which you can set up now that a data source is connected. Mongoose gives us the ability to set up models pretty quickly and easily. A model represents a type of data in the application and what fields (or columns) will be available. To begin, you can create a directory for models and create a file for your first model, in this case a blog post. The following code will create the directory and add a file for a model.

```bash:title=Terminal
$ mkdir models && touch models/Post.js
```

Open up `models/Post.js` and you can begin creating a model for blog posts. First, you'll create a schema which determines what fields are available, what data type those fields should be, and other configurations. In the schema, you can set whether the value should be a unique value, default values, and more! The code below will get a post content type set up with several fields to use:

```js:title=models/Post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  author: String,
  slug: { type: String, unique: true },
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);
```

Let's briefly go over what's happening here: First you import the mongoose library for use in this file. Next you create a schema called `postSchema` with the various fields fields you want on that data type. You may notice that the title, author, and body all have a value of `String` while comments and date have different stuff. That's because the data type is required for any field and writing out `title: {type: String}` a bunch of times sounds like a pain. The mongoose developers thought about this and decided to make the `title: String` shorthand, which does the same thing. If you need to add more information such as a default, unique, or something else you'll still have to use the object. 

In addition, you may notice that the date field is an object while the comments field is actually wrapped in an array. That's because the date is saving a single value and the object defines the parameters for that value. The comments field is actually going to be an array of data with each item in the array having the parameters specified in the object.

Finally, you define the model for Post using the schema which makes it available to use when handling data in your application.



> This is the second in a series of posts about setting up a project with Express.
> 1. [Creating a Basic Server with Express.js](/blog/creating-a-basic-server-with-express-js)
> 1. Using MongoDB with an Express.js project
<!-- > 1. [Adding Authentication to an Express application with Passport.js](/blog/adding-auth-to-express-application-with-passport) -->