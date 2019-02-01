---
title: 'this.state - How to Use State in React'
date: '2019-01-31'
tags: '#reactjs'
featured_image: './featured_image.png'
keywords: 'react.js tutorial, react state, react.js state management, react.js state vs props'
---

If you're anything like me, react state was a somewhat confusing concept. Props were easy enough to grasp, but state was a harder piece to get my head around. How is it set? Why use that if props can handle data? In this react.js tutorial, we're going to answer those questions and more.

> Props are pieces of data passed into a child component from the parent while state is data controlled within a component

### React.js State vs Props

Props and state both have their place within react. There are instances where each one is appropriate and I can't imagine trying to build things in react without both. Before we go further, here's the skinny: Props are pieces of data passed into a child component from the parent while state is data controlled within a component. The example below demonstrates how we pass a prop into a component:

```javascript
<App prop="Some data for a prop" />
```

Many times state will be used to pass data into a child component via props. There are even ways to manipulate a parent component's state from a child component.

### State Management in React

Before we can get into the details about creating a state within our component, it's important to note that state can only be [created in a class component](https://www.iamtimsmith.com/blog/class-components-vs-stateless-functional-components/). The reason for this is that fact that our state will be housed in a class constructor.

_What's a constructor you say?_ A constructor is a concept involved in object-oriented programming which creates an object. This is where we want to set up our state for the component. It should also be noted that a constructor is not necessary for class components to receive props so if we aren't "doing" anything in our constructor then we don't need to have one.

If you aren't sure how to create a component, you can [learn about that here](https://www.iamtimsmith.com/blog/how-to-create-a-component/). Now, on to the code...

The code below shows how to set up an empty constuctor. This should not be something we're putting into code as we only want to use constructors if they are doing something.

```javascript
import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      ...
    )
  }
}
```

Adding our state object is easy enough. Inside the constructor, after `super(props);`, just add `this.state` and set it equal to an empty object. Once we have created the empty object, we can fill it with data of whatever name and value we'd like. The example below has 3 different pieces of data, a boolean, a string, and a number.

```javascript
import React, { Component } from 'react'

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHungry: true,
      topping: "Pepperoni",
      slices: 8
    }
  }

  render() {
    return (
      ...
    )
  }
}
```

In the Pizza component above, you can see that we have a state which includes a true value for `isHungry`, a string value of "pepperoni" for the `topping`, and the integer 8 for the number of `slices`. We can actually use any data type within state such as bool, integer, string, array, or object.

I know what you're thinking. _Super Cool, Tim. What now?_

![Now what?](https://media.giphy.com/media/20KLYSIhq35V4EpVlC/giphy-downsized.gif)

I'm glad you asked. That brings us to the next section:

### Accessing React State from the render method

Using state inside of our render method is pretty easy. Like _SUPER_ easy. Can you guess how to do it without me telling you?

Let's say we just want to output the topping for our pizza. We could do that in a paragraph tag like so:

```javascript
<p>{this.state.topping}</p>
```

The code above would be output in the browser like this:

```html
<p>Pepperoni</p>
```

![Awesome!](https://media.giphy.com/media/d2Z9QYzA2aidiWn6/giphy.gif)

### How do we change the state?

Okay, so we have our state and we can output it. It's basically the same as props but more work, right? Wrong. This next section is the part that really makes it different from props. That difference is the ability to change the state. Below is some code that explains how to do this:

```javascript
this.setState({ item: 'newValue' })
```

How about we add a function to our Pizza component where we subtract a slice from our total slices. Below is the code to do this, which could then be triggered by a button click or other action.

```javascript
import React, { Component } from 'react'

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHungry: true,
      topping: "Pepperoni",
      slices: 8
    };
    this.eatSlice = this.eatSlice.bind(this);
  }

  eatSlice() {
    const totalSlices = this.state.slices - 1;
    this.setState({
      slices: totalSlices
    })
  }

  render() {
    return (
      ...
    )
  }
}
```

If we assume this function will be fired when a button is clicked, then each time the user clicks that button our slices in state will go down by one (even into negatives because of how simple our function is). Each time the state changes from the button click, our component will be re-rendered with the new data.

This allows users to modify data on a page in real time which is awesome. We can also pass our state into a child component as props. This brings me into my next topic which is changing parent state from a child component.

![Changing Parent State from a Child Component](https://media.giphy.com/media/3owzW5c1tPq63MPmWk/giphy.gif)

### Changing Parent State from Child Component

For the sake of demonstration, let's create a component called `Button`. Our new component will spit out a button where we can pass props into it to render a slightly different button each time.

Our new `Button` component will not have any state of it's own and will not use any lifecycle methods, so it will work as a stateless functional component. The two props we want to pass in will be `action` and `label`.

Here is the code for our newly created component:

```jsx
const Button = ({ action, label }) => (
  <button onClick={() => action()}>{label}</button>
)
```

Pretty simple, right? We will use our `action` prop to pass in a function, and our `label` prop to pass in a string which will set the text on the button. Since we're passing in a prop, we can just use the function we already wrote to eat a slice of pizza. I'll show you how this will work within the render function:

```jsx
...
render() {
  return (
    <div>
      <Button action={this.eatSlice} label="Eat a slice" />
    </div>
  )
}
...
```

What fun is it to run out of pizza? How about we add another button to buy another slice so we don't ever have to run out? Since we created a button component which will already do what we want, we can simply reuse the component and just pass in a new function and label.

Before we drop in our component, we need to write the `buySlice` function. The code below should do it. The way it works is exactly the same as the `eatSlice` function except that it will add 1 instead of subtracting 1, then setting `this.state.slices` to the new value.

Here is the code for the function `buySlice`:

```javascript
...
buySlice() {
  const totalSlices = this.state.slices + 1;
  this.setState({
    slices: totalSlices
  });
}
...
```

We need to remember to bind `this` to our function in the constructor as well. Right now our Pizza component should look like this:

```jsx
class Pizza extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHungry: true,
      topping: 'Pepperoni',
      slices: 8,
    }
    this.eatSlice = this.eatSlice.bind(this)
    this.buySlice = this.buySlice.bind(this)
  }

  eatSlice() {
    const totalSlices = this.state.slices - 1
    this.setState({
      slices: totalSlices,
    })
  }

  buySlice() {
    const totalSlices = this.state.slices + 1
    this.setState({
      slices: totalSlices,
    })
  }

  render() {
    return (
      <div>
        <Button action={this.eatSlice} label="Eat a slice" />
      </div>
    )
  }
}
```

Since we have our function to control the state in the parent component and we have bound `this` to the function, we are ready to pass it into the child component and let the child component call the parent function.

Let's create a new button to buy a slice of pizza. Modify your render method in the Pizza component to look like this:

```jsx
...
render() {
  return (
    <div>
      <p>Slices Left: {this.state.slices}</p>
      <Button action={this.eatSlice} label="Eat a slice" />
      <Button action={this.buySlice} label="Buy a slice" />
    </div>
  )
}
...
```

Just to make it a bit easier to see what's going on, I have added some text which will show you the current number of slices available. We can now click our "Eat a slice" button to reduce the number of slices by one and we can click the "Buy a slice" button to increase the number of slices by one.

### Conclusion

Working with state is an essential skill to have in react. It makes our lives as developers easier and more managable without overcomplicating things.

In this post, we talked about what state is, how to create state, how to change state, and how to manipulate state from a child component. This should be enough information for you to control the data within our components in most cases. Now go forth and build cool stuff!

<br/>
<iframe height="600" style="width: 100%;" scrolling="no" title="xMqdjV" src="//codepen.io/iamtimsmith/embed/xMqdjV/?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamtimsmith/pen/xMqdjV/'>xMqdjV</a> by Tim Smith
  (<a href='https://codepen.io/iamtimsmith'>@iamtimsmith</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
