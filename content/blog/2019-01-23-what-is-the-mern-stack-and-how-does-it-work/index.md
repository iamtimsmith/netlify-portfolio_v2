---
title: 'What is the MERN stack and how do I use it?'
date: '2019-01-23'
tags: '#reactjs #nodejs #expressjs #mongodb'
featured_image: ./featured_image.jpeg
keywords: 'mern stack, mern stack tutorial, react js, express js, express js node tutorial'
description: 'In this MERN stack tutorial, we will build a simple blog using React js, Node js, Express js, and Mongodb to add to our Full-Stack Developer toolkit.'
published: true
---

<div class="message is-dark">
  <div class="message-body">

Note: The code for this tutorial can be found [here](https://github.com/iamtimsmith/simple-mern-app).

  </div>
</div>

In this MERN stack tutorial, we will build a simple blog using React js, Node js, Express js, and Mongodb to add to our Full-Stack Developer toolkit.

## What's a "stack"?

Perhaps the first item to discuss is the idea of a "stack". There are many different stacks out there, but they are all just different ways to do the same thing: Create a full stack app which consists of a front-end that allows people to interact with the server and database behind the scenes in a simple and manageable way. A stack is simply the different technologies being used to accomplish that goal.

> "A stack is simply the different technologies being used to accomplish that goal."

Although there are many different stacks out there to consider, some have become more common than others. One of these popular stacks is called the MEAN stack which consists of:

- **M**ongoDb
- **E**xpress js
- **A**ngular js
- **N**ode js

Today we will be looking at the MERN stack which is almost the same as MEAN except we will replace Angular js with React js. This will allow us to use MongoDB for our database, Nodejs and Express js for our server and routes, and React js to create a front-end for the user to interact with.

<video src="https://media.giphy.com/media/tO5ddHjpXB6lG/giphy.mp4" playsinline autoplay loop muted></video>

## How do we build with it?

Before we start getting into the nitty gritty, let's start with an overview of how these pieces will work together. This piece took a while for me to "get" because I came from a PHP background where the back-end and front-end intermingle.

### 1. Back-end (Node and Express js) and Front-end (React js)

The first thing to understand is that the back-end and front-end are separate entities. The front-end can be housed in the same repository or in a separate repository altogether.

### 2. We use API endpoints to communicate

If you're now wondering how we make the two work together, the answer is through APIs. An API (or Application Program Interface) will be created on our server which will provide "endpoints" where our front-end application can interact with it.

To illustrate, think of your left hand as the back-end and your right hand as the front-end.

Now put your hands together with your fingers intertwined like you're holding hands with yourself. This is the way templating languages work. They allow you to just render some markdown with data dumped in from the server so there's a lot of overlap between the two.

Now separate your hands. This time spread your fingers as far apart as you can and only touch the fingertips of your left hand to the fingertips of your right hand. This is how the MERN stack works. The back-end provides endpoints (the fingertips on your left hand) which allow access to the server while the front-end makes calls (the fingers on the right hand) to those end points (where they touch) to get access to the server (left hand).

Hopefully that cleared things up a little and if it didn't, forget I ever mentioned it.

## Our Node js and Express js Back-End

While I'm not going to get into how to build it step by step in this article (that will be a separate article), I would like to go over different pieces that can be/are commonly used in this stack. I went through several tutorials which explained how to set up a server but not necessarily why those libraries are used to do so.

<video src="https://media.giphy.com/media/5wFkqt6A8R4qAqGIFQ/giphy.mp4" playsinline autoplay loop muted></video>

Once we create our `app.js` file, we will have to install some packages. Here are some common packages I've used in my Express js projects before which might be helpful to you.

- **Express js** - A web application framework with built in functionality for a lot of things including routing.
- **Mongoose** - An ODM to allow interactions between our express js application and MongoDB.
- **BodyParser** - A library which allows our express js application to read the body (or content) of the incoming requests.
- **DotENV** - Allows us to use a .env file for sensitive data.
- **Passport js** - Authentication for our app with several different options for authentication methods.
- **Validator** - Simple validation on many types of data.
- **bCrypt** - Encryption for sensitive data such as passwords
- **Nodemon** - "Hot Reloading" for our node server when things change so we don't have to stop and start the server every time we make a change

Of course there are many more packages out there, but these are several of the commonly used libraries I see and why they are used.

Now that we have gone over some commonly used packages, let's take a look at some code. First, our server:

```js:title=server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import Model
const Post = require("./models/Post");

// Connect to MongoDB
mongoose.connect(
  "mongodb://localhost:27017/simple-mern",
  () => console.log("MongoDB is connected")
);

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Get all of our posts
app.get("/api/posts", (req, res) => {
  Post.find({}).then(posts => {
    res.json(posts);
  });
});

// Get One of Our posts
app.get("/api/posts/:id", (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => {
    res.json(post);
  });
});

// Create and Update post
app.post("/api/posts", (req, res) => {
  const data = {
    title: req.body.title,
    content: req.body.content
  };
  Post.findOne({ _id: req.body.id }, (err, post) => {
    if (post) {
      Post.findByIdAndUpdate(req.body.id, data, { upsert: false }).then(
        updated => {
          res.json(updated);
        }
      );
    } else {
      Post.create(data).then(created => {
        res.json(created);
      });
    }
  });
});

// Delete selected post
app.post("/api/posts/:id", (req, res) => {
  Post.findByIdAndDelete(req.params.id).then(post => {
    res.json({ message: "Your post was deleted!" });
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
```

So here is our simple API server. As you can see, it has some basic CRUD (Create-Read-Update-Delete) functionality to it but nothing super complicated. If we look closely, we can see that we are using `res.json()` to provide the output data at a specific URL rather than outputting HTML or another template. This is how we build our APIs to make data available to React js.

You may also notice that I have just pointed mongoose toward my own mongodb server on my machine. For this to work properly, MongoDB needs to be installed on your computer and running. If it is not running, simply pop open a terminal window and type this command:

```bash:title=terminal
mongod
```

This will start up the MongoDB server on your local machine. Because this is just being done locally, you won't be able to see my posts if you run the code in the repo. You will have to create new content. If you are looking for some dummy content, my current favorite generator is [Fillerama.io](http://fillerama.io/) which spits out text from some of my favorite movies and shows.

If we're interested in testing out the server by itself, we can run the following command to start up the server:

```bash:title=terminal
npm run server
```

After the server starts up and tells us that it's running on port 3333 and MongoDB is connected, we can open up [Postman](https://www.getpostman.com/) and test out our routes there. For GET routes, we can simply put in the route and hit "Send". For the post routes, we will need to select "Body" and create/enter title and content fields.

## A Note About Our Front-End

Now that we have our server up-and-running, we can start working on the client (or front-end) that our users will interact with. This will be built with React js and can be done a few different ways.

The first way is to just add the front-end libraries necessary (react, react-dom, react-router, etc) into the same `package.json` file as the back-end ones. While I did do that for this project, it should be noted that I don't think this is best practice. I feel that as our project grows, our codebase will get messier and harder to work with if this method is used. I decided to go this route for this particular application because I know that it isn't going to grow or really change. The application I'm referencing here is simply for demonstration purposes.

The second and more optimal way (in my opinion) would be to create a repo for the back-end and a separate repo for the front-end. We can still clone the front-end repo into our project directory without any problems as long as we make sure to include the front-end in the `.gitignore` file. For instance, our file structure for this app includes a directory called `client` for all of our front-end code. We could have put that in a separate repo altogether and then just put the following into the `.gitignore` file for our back-end repo:

```js:title=.gitignore
client
```

Adding the `client` folder to the `.gitignore` file will ensure that it is not being seen as a second repo in the project. In addition, doing things this way makes it simple to redesign and swap out front-ends without having to touch the back-end.

How your full stack app is designed will be totally up to you, I just feel that things can stay a bit more organized by maintaining separate repos for front and back ends.

<video src="https://media.giphy.com/media/cIWnDtConYRFPxmmah/giphy.mp4"  width="300" playsinline autoplay loop muted></video>

### Creating Our React js Front-End

Now that we've gone over project organization, let's talk about our actual Front-end code. Below is my `app.js` file for the React js app and rather than putting the code to each component in this post, I'll just drop a link to the repo [here](https://github.com/iamtimsmith/simple-mern-app) and explain what each of the react components is doing.

```jsx:title=client/app.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Index from "./components/index";
import Single from "./components/single";
import New from "./components/new";
import Edit from "./components/edit";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Index} />
      <Route path="/new" exact component={New} />
      <Route path="/post/:id" exact component={Single} />
      <Route path="/edit/:id" exact component={Edit} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
```

And here's a screenshot of our app homepage:

![Homepage for MERN app with CRUD functionality](homepage.png)

As you can see, the `app.js` isn't anything complicated. It has a `<Router>` which allows us to set up routes in React js which render different components based on the url. Here are the other components being used in our React js application:

- **Header** - A navigation bar at the top of the screen
- **Index** - Lists all of the available blog posts
- **New** - Form which allows user to create new blog post
- **Single** - Displays a single blog post based on the id
- **Edit** - Form which allows user to update blog post based on id

We are using Axios to make our http calls to our API endpoints and then using React js to display the data how we'd like. I will put the Index.js code in this post so we can examine how that is working together.

```jsx:title=client/components/index.js
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/api/posts").then(posts => {
      this.setState({
        posts: posts.data
      });
    });
  }

  render() {
    return (
      <div className="m-8">
        <ul className="index">
          {this.state.posts.map(post => (
            <li key={post.title}>
              <h2>
                <Link to={`/post/${post._id}`}>{post.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
```

In the code above, we are [using a class component](https://www.iamtimsmith.com/blog/class-components-vs-stateless-functional-components/) which allows us to [use state](https://www.iamtimsmith.com/blog/this-state-how-to-use-state-in-react/) and lifecycle methods. This is necessary because Axios calls should be made in a `componentDidMount()` lifecycle method. It should be noted that I was getting a CORS error when I was trying to make calls to my local API. To solve this I added some headers into the `server.js` file in the Express server to make this work. That code is noted in comments within the `server.js` file.

### Making Sure Crawlers Can Read Our React js Application

Before wrapping up, I would like to talk a bit about rendering. If we run our application and go to a particular blog post directly, there may be some issues with the content not showing up. This can cause a poor viewing experience for the user and it makes it difficult for Search Engine crawlers to index the site. To get around this, I recommend using something like [Gatsby js](https://www.gatsbyjs.org/) or [Next js](https://nextjs.org/). These two solutions are different from one another, but can both be useful depending on your needs.

[Gatsby js](https://www.gatsbyjs.org/) is a static site generator which allows you to build a site with React js and then Gatsby turns it into static files at build time and makes the site super fast. There's lots of plugins that are helpful and make Gatsby really versatile. In fact, [my site](https://www.iamtimsmith.com) is a Gatsby js site! Since the static files are being created at build time, each time source content is changed the site will need to be rebuilt.

[Next js](https://nextjs.org/), on the other hand, is server-side-rendering for React js sites. It comes with a lot of functionality baked in such as routing, code-splitting, styled components, and more. Server side rendering means that the data will update automatically as it does on the server, but it will be rendered before the browser tries to display it. This means that there won't be any display issues with data for the user and Search Engine crawlers can do their job no problem.

There are plenty of other solutions out there, but these are the two that I have heard about most and the two that I have used to solve this issue. Both have awesome documentation and are easy to get up and running with too.

## Final Thoughts On MERN Stack

I hope that this article has helped to clear up some confusion about how this stack works. It is simply using MongoDB, Express js, and Node js to create a server which provides API endpoints that our React js application can make calls to for data. Now that you have a better understanding, go build awesome things!
