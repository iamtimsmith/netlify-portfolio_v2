---
title: Let's build a search bar in React!
date: '2018-09-11'
path: lets-build-a-search-bar-in-react
tags: reactjs javascript
image: /assets/lets-build-a-searchbar-in-react.jpeg
keywords: 'react, javascript, search'
---
I know, I know...another task app...

Hear me out though! We are going to build a task app that also filters the list based on a search query in real time. Sound complicated? It's not as complicated as you may think, so let's dig in!

> **A quick note before we begin:**
> I'm going to be using Parcel as a bundler. It's pretty awesome and SUPER
> easy to set up. I have another article about setting up a project with parcel 
> that will give you more information about the setup, so if I run through it too 
> fast here, I'd recommend checking that out [here](https://www.iamtimsmith.com/blog/parcel-js-who-says-bundling-needs-to-be-difficult).

### Set up our files

To get started, we will be creating our directory and entering it using the command line. To do this, open up your terminal and navigate to the directory in which you want to put your project. Once there, use the following line of code to create the directory for our project and enter it.

```
mkdir search-tasks && cd $_
```

Now that we are in our project folder, we need to initialize our project with yarn or npm. I'll be using yarn for this project but the npm commands are pretty much the same.

```
yarn init -y
```

We are going to just use the `-y` flag so it automatically configures things for us. We will go in and modify the `package.json` file soon.

Now that we have a `package.json` file, we should create our `index.html` and `app.js` files. You can use the line of code below in your terminal to create these two files at the same time.

```
touch index.html app.js
```

Next we need to open our `index.html` file for editing and put the code below inside:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Search To-Do App</title>
</head>
<body>
  <div id="app"></div>
  <script src="./app.js"></script>
</body>
</html>
```

<img src="https://thepracticaldev.s3.amazonaws.com/i/d7j7e1fshxeaaxe1j9qo.jpeg" alt="Add packages to our project">

### Add packages to our project

Next we need to install the necessary packages to our project. In this case it's going to be React, React DOM, Parcel, Babel-Preset-env, Babel-Preset-React, and Bulma. To add these to our project, you can use NPM or Yarn. I will provide code for both, so you can choose whichever you are more comfortable with.

```
npm install react react-dom parcel babel-preset-env babel-preset-react bulma --save-dev

or

yarn add react react-dom parcel babel-preset-env babel-preset-react bulma
```

#### What do these do?

NPM and Yarn are package managers that allow you to add prewritten code into your project. This can speed up development time astronomically. Below you'll find a quick description of what each of these packages do.

* React: A library to speed up development (seems obvious for a React tutorial, right?) [Link](https://reactjs.org/)
* React-DOM: A library which allows React to interact with the DOM in a browser.[Link](https://reactjs.org/docs/react-dom.html)
* Parcel: A bundling library which requires no config. [Link](https://parceljs.org/)
* Babel-preset-env: A library which tells Parcel how to transform ES6 to work with many different browsers. [Link](https://babeljs.io/docs/en/babel-preset-env.html)
* Babel-preset-react: A library which tells Parcel how to handle JSX. [Link](https://babeljs.io/docs/en/babel-preset-react)
* Bulma: A CSS framework that uses flexbox and is easy to use. [Link](https://bulma.io/)

### Set up package.json and .babelrc

Before we can actually start building our React project, we need to add a `.babelrc` file to include the babel-presets we installed. First, create the file using the code:

```
touch .babelrc && open $_
```

Once inside the file, we will add the following code to include the installed presets.

```
{
  "presets": ["env", "react"]
}
```

### Set up app.js file

Still with me? Great! The next step is to set up a component in our `app.js` file. We will be using state to manage our list, so we need to use a class component for this. First, let's import the necessary libraries to build our app.

```
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
```

Then we can create an App component:

```
class App extends Component {
  render() {
    return(
      ...
    )
  }
}
```

Then we need to make sure that our component is rendering to the DOM. We will use React DOM for this.

```
ReactDOM.render(<App />, document.getElementById('app'));
```

Now we can add in our constructor and state. We will create a 'list' array in state. To start with, we will populate it with a few items so we can see our list:

```
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Go to the store",
        "Wash the dishes",
        "Learn some code"
      ]
    }
  }
  ...
}
```

Awesome! Now that we have our list in the App component's state, lets display that list. I'm using Bulma for my styles, but you may be using something different. That's totally cool, you'll just need to adjust your classes accordingly.

```
class App extends Component {
  ...
  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
```

#### What is the code above doing?

We need to render our list. To do this, we are using a few Bulma classes to help give things a bit of room to breathe. The important part is happening with the `<ul>`. First we create the `<ul>` in which we want to display our list. Then we're going to escape the JSX by using curly braces and use a javascript function called `.map()`. We get the list we made in state with `this.state.list` and add `.map()` to the end of it. We then pass a callback function (in this case we're using an arrow function) to return the JSX we want to show. 

A `.map()` function works similarly to a `foreach` because it loops through each item in the array. The argument we pass into the callback function (in this case `item`) will represent the item in each iteration of the loop. Inside of the return we will create an `<li>` and the text it will display will be `item`, or the text in the current index of our list array.

#### What do we get?

If we go back to our terminal and type in `yarn start` or `npm run start`, we can go to `localhost:1234` in our browser to see the to-do list we made showing as an unordered list. Now lets allow users to add to-do items to the list.

### Adding items to the list

This will be pretty simple. First we need to add the code to render an input box and a submit button. Our complete code for the rendered component should look like this for now:

```
<div className="content">
  <div className="container">
    <section className="section">
      <ul>
        {this.state.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
    <hr />
    <section className="section">
      <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Something that needs ot be done..."
        />
        <button className="button is-info" onClick={this.addItem}>
          Add Item
        </button>
      </form>
    </section>
  </div>
</div>
```

#### Add functionality to add item

Now that we have an input and button rendered, we need to make it do something. Otherwise our users won't be able to change the list at all. To do this, we need to add a function called `addItem()` to our component below the constructor but before the render method. We need this to run when we click our button. Upon click, it should take the text in the input and see if it's not empty. If it has text we will add it to the array in our state which will then update our rendered page. The following function will add the necessary functionality to our input:

```
addItem(e) {
    // Prevent button click from submitting form
    e.preventDefault();

    // Create variables for our list, the item to add, and our form
    let list = this.state.list;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("addItemForm");

    // If our input has a value
    if (newItem.value != "") {
      // Add the new item to the end of our list array
      list.push(newItem.value);
      // Then we use that to set the state for list
      this.setState({
        list: list
      });
      // Finally, we need to reset the form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      // If the input doesn't have a value, make the border red since it's required
      newItem.classList.add("is-danger");
    }
  }
```

We now have our function built but it doesn't know when to run or how to interperet the `this` keyword. We can tell react how to handle this with the following code in our constructor:

```
this.addItem = this.addItem.bind(this);
```

And we can add an onClick trigger to our button, so our button should look like this:

```
<button className="button is-info" onClick={this.addItem}>
  Add Item
</button>
```

We can test our application by using `yarn start` or `npm run start` and going to `localhost:1234` in our browser. Our app now allows us to add an item to the list! Pretty cool!

<img src="https://media.giphy.com/media/vohOR29F78sGk/giphy.gif" alt="Add a delete button" />

### Adding a Delete button

Okay, so now our users can add items but what good does that do if they can't remove them once they're done? They'll just have items upon items upon items until the entropy peaks their anxiety levels and puts them in the grave early. Let's go ahead and save a few lives by adding a delete button, shall we?

Just like before, we'll be adding a function to handle this. The code below will allow our users to delete their list items when completed:

```
removeItem(item) {
    // Put our list into an array
    const list = this.state.list.slice();
    // Check to see if item passed in matches item in array
    list.some((el, i) => {
      if (el === item) {
        // If item matches, remove it from array
        list.splice(i, 1);
        return true;
      }
    });
    // Set state to list
    this.setState({
      list: list
    });
  }
```

#### Add to constructor

We also need to add this function to the constructor. Just like before, we can do this like so:

```
this.removeItem = this.removeItem.bind(this);
```

#### Add button to delete item

To make it easy for users to delete the item, we should add a delete button to the `<li>`. The code below will do that.

```
...
<ul>
  {this.state.list.map(item => (
    <li key={item}>
      {item} &nbsp;
      <span
        className="delete"
        onClick={() => this.removeItem(item)}
      />
    </li>
  ))}
</ul>
...
```

Now we can run `yarn start` or `npm run start` in the terminal to view our changes. Now we can click on the x to delete that item from the list. Did it work?

### Turning the list into a component

Whew! So far, so good.

Next we are going to turn our list into a component with it's own state and methods. I'm just going to create the component within our app.js file to keep things simple, but you could also create this component in a separate file and import it. Below the App component, create a class component called List with the following code:

```
class List extends React.Component {
    render() {
        return (
            <div>
            ...
            </div>
        )
    }
}
```

The code we want to render is just our list, so go back up to our App component and grab the following code to paste into the render function for our List component:

```
<ul>
  {this.state.list.map(item => (
    <li key={item}>
      {item} &nbsp;
      <span
        className="delete"
        onClick={() => this.removeItem(item)}
      />
    </li>
  ))}
</ul>
```

Replace that code in the App component with a call to our List component like so:

```
<List items={this.state.list} delete={this.removeItem} />
```

#### What's the code above doing?

Here, we are calling the List component and passing a few props in. The `items` prop is sending in the list we have stored in our state. The `delete` prop is passing in the `removeItem` method we created to delete the items.

Before this will work as expected, we need to modify our List component a bit. First we need to add the constructor so we can receive props.

```
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    ...
}
```

If we run the application with `npm run start` or `yarn start`, the application should look the same as it did before. We can still add items to our list with no problem. If we click the delete button...uh oh...it doesn't work. Why is this?

We don't have a method called `removeItem` within this component, so clicking the button doesn't call anything. Fortunately, we had the foresight to pass that method into this component as a prop. To regain the delete functionality, we can just alter the code for that button to the following:

```
<span className="delete" onClick={() => this.props.delete(item)} />
```

So with a few adjustments, we now have a fully functioning list in a separate component. Now, onward to adding a search function.

### Create a filtered item in List

The first part of adding a search bar will be to create an array of our filtered list.If the input bar is empty, it should display all items in the list. If there is text in the search bar, it should only show items that contain that text.

First, we'll add state to our List component and give it an array called filtered. The code below illustrates this.

```
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        }
    }
}
```

Once we have a place to put our filtered list, we need to make sure the data is being put there.

> Fair warning: This part may get a bit abstract, so do your best to stick with me. If I don't explain well enough or you're struggling with it, leave a comment and I'll try to help you get it.

Our original list of tasks is located in the App component, which in this case is the parent component.This state is being passed into the List component, in this case the child component, which gets re-rendered every time the task list is updated. What is the point of tell you this, you ask? We need to pass data into our `filtered` state every time the List component gets re-rendered. To do this, we will use a few lifecycle methods.

Lifecycle methods allow us to "hook" into a component at various points in it's render process. In this case, we're going to use `componentDidMount` and `componentDidReceiveProps`. `componentDidMount` will allow us to put the data into our `filtered` array when the component is initially rendered. On the other hand, `componentDidReceiveProps` will fire any time the props being passed into the component are changed.

To add these lifecycle methods to our List component, add the following code below the constructor but before the render function:

```
componentDidMount() {
  this.setState({
    filtered: this.props.items
  });
}

componentWillReceiveProps(nextProps) {
  this.setState({
    filtered: nextProps.items
  });
}
```

Now if we change the `.map()` function we're using for our list to map over the `filtered` list instead of the `items` list being passed in through props, we should see the same thing on the front end. 

<img src="https://media1.tenor.com/images/0abd7b24a1f28196cbde3c081aae20dd/tenor.gif" alt="Whoop-dee-doo"/>

What's the big deal? The big deal is that now we have a list we can manipulate without altering the original list. All we have to do is modify our `filter` state and the items being displayed will also reflect that, but we haven't lost the original list by doing this.

### Create the search bar itself

It seems to me that a good place to start with a search bar is...well...the search bar.Let's go ahead and create that. Inside of the div wrapper in our List component, lets add an input.

```
<div>
    <input type="text" className="input" placeholder="Search..." />
    <ul>
    ...
    </ul>
</div>
```

Cool! Now we have a search bar. If only it actually worked...

### Make the search bar search

We have a nice looking search bar, but it doesn't really do anything other than look pretty. Maybe this is good enough, but I think there is more to life than just being really, really, ridiculously goodlooking. Let's add the "brains".

<img src="https://media1.tenor.com/images/acfdeea24b2907dc5aab376551b69b22/tenor.gif?itemid=3547407" alt="Really Really Ridiculously Good Looking" />

To start, we'll add a method called `handleChange` after our lifecycle methods. We will be passing in `e` as an argument which will stand for event. Inside of the method, we'll create two variables which will hold the original task list being passed in as props as well as the filtered list before it's passed into state.

We also need to add an if statement so that the `.filter()` function only runs if the input isn't empty. Otherwise and empty search bar won't display any tasks. So if the search bar is not empty, we want to run the `.filter()` function and see if the current item contains the search terms. If it does, then we will return that item to the newList array.

```
handleChange(e) {
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];
		
		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.items;
			
			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
```

> When using `.contains()`, it is case sensitive. This could make searching within our tasks more difficult for the user because they will have to know exactly what casing the item uses. To get around this, we can just change everything lowercase in our function so we know what case everything will be using when we do our search. The comments above also explain this.

### Adding the method to the input

We're so close! Before we can use the `handleChange()` method, we need to bind the `this` keyword to it. Inside of our constructor, after the state, add the following code to bind our `this` keyword for the method.

```
this.handleChange = this.handleChange.bind(this);
```

Finally, we can add an event handler to the input item to call the method whenever the content is changed.This last piece will be what actually makes the search function work. Add `onChange={this.handleChange}` to the input element to make it look like this:

```
<input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
```

### Conclusion

Running the application should now allow you to create, delete, and search tasks.There's a lot of text here, but it's not actually THAT complicated.

Was this helpful for you? If you run into any problems, let me know and I will get this tutorial updated. I have also added the codepen with the full code below so you can play around with it or compare code.

<iframe height='462' scrolling='no' title='Searchbar in React' src='//codepen.io/iamtimsmith/embed/zJPzwN/?height=462&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/iamtimsmith/pen/zJPzwN/'>Searchbar in React</a> by Tim Smith (<a href='https://codepen.io/iamtimsmith'>@iamtimsmith</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
