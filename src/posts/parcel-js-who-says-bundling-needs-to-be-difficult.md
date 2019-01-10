---
title: 'Parcel.js: Who says bundling needs to be difficult?'
date: '2018-08-31'
path: parcel-js-who-says-bundling-needs-to-be-difficult
tags: '#reactjs #javascript'
image: /assets/parcel.png
keywords: 'parcel, javascript, how to set up a project'
---
If you're using React, you've likely come across build tools such as [Webpack](https://webpack.js.org/), [Grunt](https://gruntjs.com/), or [Gulp](https://gulpjs.com/).

These tools are very cool, but at the same time can act as a barrier to entry because of the configuration necessary to use them. There is an easier way to bundle and build our projects: [Parcel.js](https://parceljs.org/).

I'm going to show you how to set up a project using Parcel for building a React app. It only takes about 5 minutes to get up and running (even less once you've done it a couple of time)!

### What is Parcel.js?
According to the Parcel.js website, it is:
> ... a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

#### Why is this useful to us?
There's nothing worse than trying to start a project and getting lost in the proverbial weeds when setting up a build tool. Parcel.js eliminates the need for configuration which means we can skip over that part and get right to our project. What's not to love?

It also takes advantage of multicore processing and caching to help speed up build times. No more 30 second waits before we can view our project. Ready to get started and see how easy it is to set up our project? Great!

### Setting up our project with Parcel.js
#### 1. Create directory and enter
The first step in any project is creating the directory that will house our files. To do this, navigate to the folder that will contain our project folder and use the line of code below in our terminal.
```
mkdir parcel-setup && $_
```

#### 2. Initialize NPM or Yarn
Now that we have our project directory, we should initialize NPM or Yarn to create a package.json file. I will be providing the code for both, but you can just follow the one you prefer. To initialize our project, use the code below:
```
npm init -y

or 

yarn init -y
```
The init command initializes the project and the `-y` flag goes with the default setup. We could also do this without the `-y` flag and manually set up our package.json file.

#### 3. Initialize Git repo and add .gitignore
It's always a good idea to use git in our projects. Git is a version control tool that allows us to take a "snapshot" of code and save it locally or on a site like [Github](https://github.com/). To add git to our project, we need to initialize it with the following command:
```
git init
```
Once we have git added, we should add a .gitignore file. The point of this file is to tell our computer to ignore the files or directories listed when making a commit, or snapshot. The line of code below will create the file and open it for us to edit.
```
touch .gitignore && open $_
```
Once our file is open, we need to add the files and folders we don't want added. In this case, it's just going to be our node_modules folder, which is where our dependencies are stored. Our .gitignore file should look like this:
```
node_modules
```


#### 4. Create an index.html file
We're about halfway done. Pretty fast, right?

To create our index.html file, we can go back to the terminal and use the following line of code:
```
touch index.html
```
We can now open this file in our text editor. We will fill it with the following code. (Hint: If you're using a text editor with Emmet, you can type in `html:5` and hit tab. It should do most of the work for you!)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Parcel Setup</title>
</head>

<body>
  <div id="app"></div>
  <script src="./app.js"></script>
</body>

</html>
```

#### 5. Install dependencies
The next step in setting up our project is to install the dependencies for our project. As before, I'm providing code for NPM and Yarn, so just use whichever you are using in your project.
```
npm install react react-dom parcel babel-preset-env babel-preset-react --save-dev

or

yarn add react react-dom parcel babel-preset-env babel-preset-react
```
Once our packages have finished installing we can finish getting our project set up!

#### 6. Add app.js
To actually create our app, we will put it in an app.js file, so can you guess what's next? Yep! We need to create and open the file.
```
touch app.js && open $_
```
Inside our app.js file, we will create a React component and use React DOM to render it. If you're unsure about how to create a React component, you should read [this article for a quick overview](https://www.iamtimsmith.com/blog/how-to-create-a-component). Below is the code we need to create a React app in our app.js file:
```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

Great! The top of our file is importing the dependencies we need for this file. We installed them in step 5. Next, we're creating our App component which will just return an H1 tag with the text "Hello World!". The bottom line renders the app inside the #app element we created in our HTML document in step 4.

#### 7. Create a .babelrc file to tell it how to compile the JavaScript
We're almost done! Since React uses ES6+ JavaScript, we need to set up a .babelrc file to tell it how to compile our code. Babel basically takes the most modern syntax (ES6, ES7, etc) and turns it into code that all browsers can read whether they support ES6+ or not. Pretty cool, right? Let's create our .babelrc file!
```
touch .babelrc && open $_
```
Inside of our file, we will put the following code. This is a pretty basic setup, but it will get the job done for our project today.
```
{
  "presets": ["env", "react"]
}
```
Awesome! Just one more step and we're done!

#### 8. Add scripts to our package.json file
The final step before we run our app is to add some script commands to our package.json file. Lets get it open.
```
open package.json
```
It should look like this:
```
{
  "name": "parcel-setup",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "parcel": "^1.9.7",
    "react": "^16.4.2",
    "react-dom": "^16.4.2"
  }
}
```
> A quick note: The version numbers for your dependencies may be different from mine. At the time of writing, these are the most up-to-date versions.

We're going to add the following code. It says that when we type `npm run start` or `yarn start`, it should use Parcel to build our application and serve the index.html file.
```
"scripts": {
    "start": "parcel index.html"
},
```
Our complete package.json file should look like this:
```
{
  "name": "parcel-setup",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "parcel index.html"
  },
  "dependencies": {
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "parcel": "^1.9.7",
    "react": "^16.4.2",
    "react-dom": "^16.4.2"
  }
}
```

### All set up
Our Parcel setup is now complete! To build our application, go back to your terminal and run the command below:
```
npm run start

or

yarn start
```

Your terminal now says `Server running at http://localhost:1234`. Let's open up our browser and go to [http://localhost:1234](http://localhost:1234) to see our project.

### Conclusion
We've now seen how easy it is to get up and running with Parcel. While tools like Webpack offer more customizations for enterprise level applications, Parcel is great for smaller or new applications as well as prototyping. I highly recommend reaching for Parcel the next time you're starting a new project.

You can find the code for this [here](https://github.com/iamtimsmith/parcel-setup).
