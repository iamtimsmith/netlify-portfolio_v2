---
title: 'React: Class Components vs. Stateless Functional Components'
date: '2018-08-22'
path: class-components-vs-stateless-functional-components
tags: '#reactjs #javascript'
image: /assets/pexels-photo-574070.jpeg
keywords: 'react, component, javascript'
---

When I first began to learn React, I didn't even realize there was a difference between class components and stateless functional components. I thought they were just different ways to write the same thing.

In some ways, they are. In many ways, they aren't the same. In this article, I'll explain the differences between the two as well as when and why to use the different types.

### What is a "Class Component"?

A class component is a component that takes advantage of [ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) to manage various pieces of the component. State is something we use a lot in React and I'll write more about it in a later post. For now, just know that it's how we manage data within our component. In addition to state, we can create custom functions to use in our component and take advantage of lifecycle methods.

These things can be useful when we are storing or maniplating data within our component. Cases such as these will be our primary use cases for class components. I have provided an example of a class component which will render "Hello World" below using state:

```
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello World"
    }
  }
  render() {
    return (
      <div>
        <p>{ this.state.greeting }</p>
      </div>
    )
  }
}
```

### What is a "Stateless Functional Component"?

I know, I know. "Stateless Functional Component" sounds like something big and scary, but I promise: it's not. A stateless functional component is just a function that returns JSX. It's very simple but incredibly useful.

There are two ways to create a stateless functional component. Both are similar and do the same thing, it's just a matter of conciseness. I will be using [ES6 arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) to create the components. If you haven't used them, I highly recommend you check ES6 out.

#### The first way: Put it in a variable

If we are putting all of our components in a single file, then this should be how we create stateless functional components. The ability choose how succinctly we want to create our functional components comes into play when we have a different file for each component. The code below illustrates how we can create a functional component within a variable and export it for use in another area of our app.

```
const HelloWorld = (props) => (
  <div>
    <p>{ props.greeting }</p>
  </div>
);
export default HelloWorld;

~~~

<HelloWorld greeting="Hello World!" />
```

#### The second way: export the function

When we have a stateless functional component in a file by itself, we don't need to name the component. I know, this saves us, like, 10 characters but hey I'll take what I can get. We can simply create the function and export it like the code below.

```
export default (props) => (
  <div>
    <p>{ props.greeting }</p>
  </div>
);

~~~

<HelloWorld greeting="Hello World!" />
```

As you can see, these two functional components look almost identical and they do the same thing. It's really just a matter of personal preference.

> A Quick Note:
> With ES6 arrow functions, we can use curly braces and put a return inside of those. To keep things concise, we
> can also write the function on one line. If no curly braces are placed after arrow, the function will
> automatically return whatever is behind the arrow. If the JSX we are returning takes more than one line, we can
> wrap our code in parenthesis like the code above.

#### Which one should I use?

Typically I see that "best practice" is to use stateless functional components whenever possible to reduce code bloat. On [Syntax.fm](https://syntax.fm/) they discussed just using class components all the time because they find that they change a lot of their components from functional to class and don't want to keep converting. Unless you're building an app that is going to be HUGE, I don't see this really causing any problems in terms of performance, so that's completely up to you.

<br />
I would love to hear your thoughts about when to use each of these components. How often do you use stateless function components vs class components?
