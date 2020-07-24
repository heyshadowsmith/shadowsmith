---
title: What is a callback function in JavaScript?
description: Understand this simple fundamental that trips most JavaScript beginners
---

A callback is a function that waits for another function to finish executing before executing itself. It gives us the ability to enforce an order of operations to our JavaScript code.

Functions are objects in JavaScript. Because of this, functions can take other functions as arguments, and functions can also be returned by other functions. When a function takes another function as an argument or returns a function as a result, that function is called a **higher-order function**. Any function that is passed as an argument is called a **callback function**.

## Why are callbacks needed?

JavaScript is driven by events. This means that instead of waiting for a response before moving on to the next code block, JavaScript will keep executing while listening for other events. Callbacks create order in our code so that we can wait for a response from an API request or a timed action before executing another piece of code.

**Here's an example:**

```js
function hello() {
  console.log("Hello");
}
 
function name(person) {
  console.log(person);
}
 
hello();
name("Shadow");
```

As you would expect, the function `hello()` is executed first, and the function `name()` is executed second—logging the following to the console:

```bash
Hello
Shadow
```

Pretty simple stuff.

But what if the `hello()` function has a portion of code that couldn't be executed immediately? To produce a situation like this, we are going to use the JavaScript `setTimeout()` function. This is a function that allows us to call another function after a specified amount of time. For our simulation, we'll delay our `hello()` function for 500 milliseconds.

**So here's the new code:**

```bash
Shadow
Hello
```

Even though we called the `hello()` function first, we logged the result of the `name()` function first.

It's not that JavaScript didn't execute our functions in the order we wanted. It absolutely did. It just didn't wait for a response from the `hello()` function before executing the `name()` function, and since the `name()` function executes faster, it was logged to the console first.

## Why explain this?

Because in order to build more complex processes, you can't just call multiple functions hope they execute exactly when you want them to. You need to ensure certain blocks of code don't execute until other blocks have already finished.

## How to create a Callback
1. Setup our `callback` argument for our `hello()` function.<br>
**Note:** I'm using the word "callback" for my function argument keyword for explanatory purposes only. You may pick anything you want for your argument keyword.

```js
function hello(callback) {
  setTimeout(function() {
    console.log("Hello");
  }, 500);
}
 
function name(person) {
  console.log(person);
}
```

2. Call our argument function using the argument keyword `callback` inside our `hello()` function.

```js
function hello(callback) {
  setTimeout(function() {
    console.log("Hello");
    callback();
  }, 500);
}
 
function name(person) {
  console.log(person);
}
```

3. Call our `hello()` function while passing our `name()` function as the callback parameter.

```js
function hello(callback) {
  setTimeout(function() {
    console.log("Hello");
    callback();
  }, 500);
}
 
function name(person) {
  console.log(person);
}
 
hello(name);
```

4. Pass a name into the `callback()` function inside our `hello()` function.

```js
function hello(callback) {
  setTimeout(function() {
    console.log("Hello");
    callback("Shadow");
  }, 500);
}
 
function name(person) {
  console.log(person);
}
 
hello(name);
```

When this code runs, it will log the following to the console:

```bash
Hello
Shadow
```

Yeah, yeah. The information logged to the console looks exactly like when we started, but **_how_** it was logged is the key lesson here. The `name()` function was executed as a callback function of the `hello()` function. This means that the `hello()` function had to fully finish logging "Hello" to the console, even with the 500 millisecond delay, before moving on to the `name()` function which then logged "Shadow".