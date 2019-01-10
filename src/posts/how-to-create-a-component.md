---
title: 'React: How to Create a Component'
date: '2018-08-13'
path: how-to-create-a-component
tags: '#reactjs #javascript'
image: /assets/pexels-photo-1148496.jpeg
keywords: 'react, component, javascript'
---

Components are an essential part of any React application. In this post, we'll be learning how to create components to do whatever we want.

Think of components as bite-size chunks of our application that we can reuse all over our site. Let's pretend we're making a social network and want to put a like, share, and comment button below each post. We could write the code for this in each area we want it, but this is a hassle if we show it in 6 different locations and need to change it.

By creating a component for this, we can write the actual code once and just drop it in wherever we want it.

#### Creating a class component

In order to create a class component, we will have to give it a name. In the code below, we will call our class component "Example". All of our code for the component will go where the ellipsis ("...") is.

```
import React from 'react';

class Example1 extends React.Component {
  ...
}
```

That was pretty easy! It should be noted that if this is a component in a file of it's own, it will have to be exported. There are two ways to do this. We can either include "export default" before our class instantiation or we can simply put a line after the class that exports it. The examples of this are below:

```
export default class Example2 extends React.Component {
  ...
}

or

class Example3 extends React.Component {
  ...
}
export default Example3;
```

#### Adding state to a class component

Another huge benefit to class components is state. As I mentioned earlier, state allows us to manage data within our component. State is one of the big advantages of using React (although the concept is not React specific) and in order to use it, we need a class component.

To get started with state, we need to add a constructor to our class component. You can read more about constructors [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor), but for now just know that this is required to add state to our components. Typically we see "props" being passed in as an argument for our constructor so we can use any props being passed into this component. The example below illustrates this.

```
class Example4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...
    }
  }
}
export default Example4;
```

#### Render our JSX with the render method

After our constructor, we can add a render method which will return our JSX. It should be noted that in React, the return (regardless of component type) can only return one direct element. What this means is that all of the JSX we are writing to create that component must be wrapped in an outer element such as a &lt;div&gt;. The example below illustrates how this is built.

```
class Example5 extends React.Component {
  ...
  render() {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    )
  }
}
```

#### Custom Functions in our component

Another benefit of class components is the ability to write functions for use in our components. It's pretty straightforward. We can write a function between the constructor and render methods. We can pass any parameters necessary in just like any other JavaScript function. There is one additional step to make this work though. Inside the constructor, we need to bind the 'this' keyword to the method so it can be used anywhere. To do this we can use the code below:

```
  this.customFunction = this.customFunction.bind(this);
```

An example at the bottom of this post will illustrate this more so you can get a better idea of how these things fit together.

#### Using a component

If we have our components in separate files, we will first need to import the component into the file where we want to use it. We can do it with this code:

```
import Example6 from './path/to/component';
```

Once imported, we can add it to our JSX using the name we assigned to it in the import. For example, we can add the component imported above as follows:

```
<Example6 />
```

#### Props

So what if we want to pass data into our component so we don't have to hard code anything into it or do any sort of query within the component? This is where props come in. Props are pieces of data that we pass into the component instance with whatever name we like so we can access it within that component.

Let's say we want to pass the string "Hello World" into our component. When we assign the prop, we need to come up with a name for the prop. This should be something that tells us exactly what it is. Since this is a demo, I'll just use 'text' but in real apps it should be more descriptive. We can do it like this:

```
<Example6 text="Hello World" />
```

#### Receiving props inside component

Okay, so we have props being passed into our component, now what? I said before that when we create our component's constructor, we generally put props into the arguments. That's how our component receives the props we pass into it. Once there, we can access them in our JSX by using this.props.NameOfProp as follows:

```
<p>{ this.props.text }</p>
```

The code above will render "Hello World" in a p tag. Easy peezy, right?

#### Complete Code
```
// First we create our class
class Greeting extends React.Component {
	
	// Then we add our constructor which receives our props
	constructor(props) {
		super(props);
		// Next we establish our state
		this.state = {
			name: '',
			greeting: `Good ${this.props.time}, `
		}
		// To use the 'this' keyword, we need to bind it to our function
		this.onChange = this.onChange.bind(this);
	}
	
	// A custom function to change the name in our state to match the user input
	onChange(e) {
		this.setState({
			name: e.target.value
		})
	}
	// The render function, where we actually tell the browser what it should show
	render() {
		return (
			<div>
				<section className="section">
					<label className="label">Name:</label>
					<input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange} />
				</section>
				<section className="section">
					<p>{this.state.greeting} {this.state.name}</p>
				</section>
			</div>
		)
	}
}



ReactDOM.render(<Greeting time="morning" />, document.getElementById('app'));
```

You can also see the component in action [here](https://codepen.io/iamtimsmith/pen/xaRydm/?editors=0010).

### Conclusion

Although these are just the basics, they will get you pretty far in terms of building things in React. Try playing around with things and passing props into new components or adding state to a component to present data. These are the foundational building blocks of React.

<br />
Also, I'd love to see the things you've built with React so go ahead and leave them in the comments below!
