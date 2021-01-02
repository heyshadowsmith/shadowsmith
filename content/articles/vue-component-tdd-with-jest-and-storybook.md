---
title: Vue component TDD with Jest & Storybook
description: Dip your toes into the basics of building Vue components using test driven development
createdAt: 2020-01-14
---

In this article, I'm going to show you how to build a custom Vue button component in isolation using Test Driven Development (TDD).

Just a heads up, this guide assumes you have used Vue and Jest before and at least know what Test Driven Development is, so keep that in mind if you feel lost.

## Overview of what you're building

The button component you are going to be building will have a default and primary style, take 2 props, and emit a click event—all of which will have tests written **before** each of the component features are even created.

Let's get started.

## Setting up your Vue project

Open your terminal and navigate to where you want this project to be stored and do the following commands.
```
vue create storybook-tdd
```

Pick **Manually select features**
```
? Please pick a preset:
  default (babel, eslint)
> Manually select features
```

Check **Babel, Linter / Formatter, and Unit Testing**
```
? Check the features needed for your project:
  (*) Babel                              
  ( ) TypeScript                          
  ( ) Progressive Web App (PWA) Support   
  ( ) Router                              
  ( ) Vuex                                
  ( ) CSS Pre-processors                  
  (*) Linter / Formatter                  
  (*) Unit Testing                       
  ( ) E2E Testing
```

Pick **ESLint with error prevention only**
```
? Pick a linter / formatter config:
> ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
```

Pick **Lint on save**
```
? Pick additional lint features:
  (*) Lint on save
  ( ) Lint and fix on commit
```

Pick **Jest**
```
? Pick a unit testing solution:
  Mocha + Chai
> Jest
```

Pick **In package.json**
```
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?
  In dedicated config files
> In package.json
```

If you want to save this as a preset, you can here.
```
Save this as a preset for future projects?
```

And once you have answered that question, creation of your `storybook-tdd` project will begin.

## Adding Storybook

Storybook is a tool used to develop User Interface components in isolation, and if done correctly, can also act as an interactive documentation for your components at the same time.

Storybook gives you the ability to build components without focusing on the *exact* implementation of the components but rather their different states, styles, and functionalities.

So let's move into our Vue project and add Storybook with this command.
```
cd storybook-tdd && npx -p @storybook/cli sb init --type vue
```

## Setting up your TDDButton component TDD environment

First thing's first, open your project in your code editor by typing `code .` in your terminal.

Create a file called `TDDButton.vue` in your `src/components/` directory and add the following code.
```javascript
<template>
</template>
```
Open up the `example.spec.js` file in your `test/unit/` directory and delete everything inside except for these top 2 lines.
```javascript
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
```
Change the `example.spec.js` file's name to `TDDButton.spec.js` for consistency and change the `HelloWorld` component import to your `TDDButton`.
```javascript
import { shallowMount } from '@vue/test-utils'
import TDDButton from '@/components/TDDButton.vue'
```
### Setting up Storybook for your TDDButton

Delete everything inside of your projects `stories/` directory.

Create a file called `TDDButton.stories.js` in your `stories/` directory.

This is going to be where we visually develop the TDDComponent's different styles.

Add the following to your `TDDButton.stories.js` file.
```javascript
// Adding your TDDButton component
import TDDButton from '../src/components/TDDButton.vue'

// Adding your TDDButton component to your Storybook sandbox
export default {
  title: 'TDDButton',
  component: TDDButton
}

// Adding a Default style'd component to your Storybook sandbox's TDDButton
export const Default = () => ({
  components: { TDDButton },
  template: '<TDDButton />'
})
```
Now that is finished, run the following command in your terminal to launch your Storybook sandbox at `http://localhost:6006`.
```
npm run storybook
```

Once you run that command, your Storybook sandbox should automatically open, and you will see your `TDDButton` with a `Default` "Story" in the sidebar to the left.

However, everything is and should be blank right now, but you are going to be fleshing all of this out next.

Let's get started.

## Writing your 1st test

From here on, you are going to be using the test runner, **Jest**, along with **Vue Test Utils** to move through the *"Write Test > See Tests Fail > Write Code > Pass Tests > Refactor"* Test Driven Development process.

So let's keep moving.

### Understanding what Vue Test Utils is

Vue Test Utils is the official unit testing utility library for Vue, and it is absolutely vital when building Vue components using Test Driven Development. 

Therefore, we will be using it a lot throughout the remainder of this article, so I recommend pulling up the [Vue Test Utils documentation](https://vue-test-utils.vuejs.org/) as you follow along from here on.

### Mounting and destroying your component

Before you can write your first test, you need to mount your `TDDButton` component to create a wrapper that contains the fully mounted and rendered component.

In order to keep your tests fast, you need to mount your component before each test and destroy the component after.

You can do this by utilizing [Jest's Setup and Teardown](https://jestjs.io/docs/en/setup-teardown) helper functions `beforeEach()` and `afterEach()`, so go ahead and initialize our wrapper variable and set up our Jest helper functions.
```javascript
import { shallowMount } from '@vue/test-utils'
import TDDButton from '@/components/TDDButton.vue'

// Initalizing wrapper variable
let wrapper = null

// Jest's beforeEach helper function
beforeEach(() => {})

// Jest's afterEach helper function
afterEach(() => {})
```
Now to mount your component, you will use the `shallowMount` function imported from `@vue/test-utils` on line 1.

[ShallowMount](https://vue-test-utils.vuejs.org/api/shallowMount.html) is a Vue Test Utils function that allows you to mount and render **just** the component you imported with its child components stubbed, so the mount and render doesn't fail.

There is also a [Mount](https://vue-test-utils.vuejs.org/api/mount.html) function which mounts and renders your imported component **and** its children components, but this is unfavorable for Unit Testing because it opens up the possibility for your component's children to affect the outcome of your tests.

So now to mount your `TDDButton` component before every test, add `wrapper = shallowMount(TDDButton)` inside of your `beforeEach()` function's callback like so.
```javascript
import { shallowMount } from '@vue/test-utils'
import TDDButton from '@/components/TDDButton.vue'

// Initalizing wrapper variable
let wrapper = null

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(TDDButton)
})

// Jest's afterEach helper function
afterEach(() => {})
```
And to destroy your `TDDButton` component after every test, add `wrapper.destroy()` inside of your `afterEach()` function's callback like this.
```javascript
import { shallowMount } from '@vue/test-utils'
import TDDButton from '@/components/TDDButton.vue'

// Initalizing wrapper variable
let wrapper = null

// Mount the component to make a wrapper before each test
beforeEach(() => {
  wrapper = shallowMount(TDDButton)
})

// Destroy the component wrapper after each test
afterEach(() => {
  wrapper.destory()
})
```
### Conducting our first TDD feedback loop

Now that your component is mounted and ready for testing, the first test you need to write is to check if the component's name is "TDDButton".

To do this, you will need to use Vue Test Utils `name()` method.

This is pretty straightforward, but if you need it, here's the [documentation page](https://vue-test-utils.vuejs.org/api/wrapper/name.html) for this method.
```javascript
// ...continuation of your TDDButton.spec.js file

describe('TDDButton', () => {
  
  // Checking if the component's name is 'TDDButton'
  it('Named TDDButton', () => {
    expect(wrapper.name()).toBe('TDDButton')
  })

}
```
Now that you have written your first test, run `npm run test:unit` in your terminal to watch your test fail.

### Writing the bare minimum to pass the test

Now to pass your simple test, all you have to do is name your `TDDButton` component by adding the following to the bottom of your `TDDButton.vue` file.
```javascript
<template>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton'
}
</script>
```
Now if you run `npm run test:unit` again, you will see it pass.

Congratulations! You just completed your first Vue component TDD feedback loop!

Now keep going.

## Testing if your TDDButton component is a button

Now you need to test if your `TDDButton` is actually rendering a `<button>` element.

To do this, you will need to use the Vue Test Utils `contains()` method.

This is also pretty straightforward, but if you need it, here's the [documentation page](https://vue-test-utils.vuejs.org/api/wrapper/contains.html) for this method as well.
```javascript
// ...continuation of your TDDButton.spec.js file

describe('TDDButton', () => {
  
  // Checking if the component's name is 'TDDButton'
  it('Named TDDButton', () => {
    expect(wrapper.name()).toBe('TDDButton')
  })
  
  // Checking if the component contains a 'button' element
  it('Contains a button element', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

}
```
Now run `npm run test:unit` and watch the test fail.

### Passing the button element test

Now to pass this test, you have to add a `<button>` element to your `TDDButton` component like so.
```javascript
<template>
  // Adding a 'button' element
  <button></button>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton'
}
</script>
```
Now if you run `npm run test:unit`, you will see it pass.

## Writing a label prop test

For your `TDDButton` component, you want the user of the component to be able to use a `label` prop to set the text on the button.

To do this, you will want to test if your `TDDButton` component's text equals a String that is passed to it through a `label` prop.

In order to write this test, you have to use the Vue Test Utils `setProps()` method to pass props to your mounted component.

Here's the [documentation page](https://vue-test-utils.vuejs.org/api/wrapper/setProps.html) for that method, and here's how you would write the test for that.
```javascript
// ...continuation of your TDDButton.spec.js file

describe('TDDButton', () => {
  
  // Checking if the component's name is 'TDDButton'
  it('Named TDDButton', () => {
    expect(wrapper.name()).toBe('TDDButton')
  })
  
  // Checking if the component contains a 'button' element
  it('Contains a button element', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
  // Checking if the component renders the label on the 'button' element
  it('Renders button text using a label prop', () => {
        wrapper.setProps({ label: 'Call to action' })
        expect(wrapper.text()).toBe('Call to action')
  })

}
```
And you guessed it, when you run `npm run test:unit` the test will fail, but that's what we want to see!

### Passing the label prop test

Now to pass this test it takes 2 steps, but I want you to run a test after the 1st step to illustrate the power of TDD.

The 1st thing you need to do is give your `TDDButton` component the ability to receive a `label` prop.

Here's how you do that.
```javascript
<template>
  // Adding a 'button' element
  <button></button>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton',
    // Adding 'label' prop
    props: ['label']
}
</script>
```
Now if you run `npm run test:unit`, you will see it will fail because the `label` prop's value isn't being used as the `<button>` element's label.

Here's how you fix that.
```javascript
<template>
  // Passing the 'label' prop's value to the 'button' element
  <button>{{ label }}</button>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton',
    // Adding 'label' prop
    props: ['label']
}
</script>
```
Now if you run `npm run test:unit`, it will pass.

## Updating our Storybook sandbox

Now if you run `npm run storybook` in your terminal, you will see that there is a `<button>` element without a label.

However, now that you have given your `TDDButton` component the ability to receive a label as a prop, we can update this in our Storybook sandbox.

To do this, go to your `TDDButton.stories.js` file and add a `label` prop with the value `Default` to your story like so.
```javascript
// Adding your TDDButton component
import TDDButton from '../src/components/TDDButton.vue'

// Adding your TDDButton component to your Storybook sandbox
export default {
  title: 'TDDButton',
  component: TDDButton
}

// Adding a Default style'd component to your Storybook sandbox's TDDButton
export const Default = () => ({
  components: { TDDButton },
  // Adding the 'label' prop to our Default style'd component
  template: '<TDDButton label="Default" />'
})
```
Once you do this, you will see that the text "Default" has been added to your Default style'd `TDDButton` in your Storybook sandbox.

## Writing a default button styles test

Now for your `TDDButton`, you want 2 different styles, your custom default styles and a primary style.

In order to test for default button styles, you will need to test if your `TDDButton` component has a default `TDDButton` class on the `<button>` element.

Here's how you write the test for that.
```javascript
// ...continuation of your TDDButton.spec.js file

describe('TDDButton', () => {
  
  // Checking if the component's name is 'TDDButton'
  it('Named TDDButton', () => {
    expect(wrapper.name()).toBe('TDDButton')
  })
  
  // Checking if the component contains a 'button' element
  it('Contains a button element', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
  // Checking if the component renders the label on the 'button' element
  it('Renders button text using a label prop', () => {
    wrapper.setProps({ label: 'Call to action' })
    expect(wrapper.text()).toBe('Call to action')
  })
  
  // Checking if the component has the default 'TDDButton' class
  it('Has default button styles', () => {
    expect(wrapper.classes('TDDButton')).toBe(true)
  })

}
```
Now run `npm run test:unit` to see the test fail.

### Passing the default button styles test

Now to pass this test, you need to add a `TDDButton` class to your `TDDButton`'s `<button>` element.

Even though this will not cause your test to fail, you will want to also add the default button styles to the `TDDButton` class during this step, so here's how.
```javascript
<template>
  // Adding the 'TDDButton' class to the 'button' element
  <button class="TDDButton">{{ label }}</button>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton',
  // Adding 'label' prop
  props: ['label']
}
</script>

// Adding the default styles to the 'TDDButton' class 
<style>
.TDDButton {
  all: unset;
  font-family: sans-serif;
  padding: .5rem 1rem;
  border-radius: .25rem;
  cursor: pointer;
  background: lightgray;
}
</style>
```
Now run `npm run test:unit` to see the test pass and then run `npm run storybook` to see your `TDDButton` component's updated default styles.

## Writing a primary styles test

For your `TDDButton` component, you also want to give the users of the component the ability to pass the value `primary` to a `type` prop to change its styles.

To write this test, you will need to draw from the experience you gained from writing the *"label prop test"* and the *"default styles test"* because this test passes a `type` prop to add a `primary` class to your `TDDButton` component's `<button>` element.

Here's how to write this test.
```javascript
// ...continuation of your TDDButton.spec.js file

describe('TDDButton', () => {
  
  // Checking if the component's name is 'TDDButton'
  it('Named TDDButton', () => {
    expect(wrapper.name()).toBe('TDDButton')
  })
  
  // Checking if the component contains a 'button' element
  it('Contains a button element', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
  // Checking if the component renders the label on the 'button' element
  it('Renders button text using a label prop', () => {
    wrapper.setProps({ label: 'Call to action' })
    expect(wrapper.text()).toBe('Call to action')
  })
  
  // Checking if the component has the default 'TDDButton' class
  it('Has default button styles', () => {
    expect(wrapper.classes('TDDButton')).toBe(true)
  })
  
  // Checking if the component has the 'primary' class when 'primary'
  // is the value of the 'type' propery
  it('Has primary styles', () => {
    wrapper.setProps({ type: 'primary' })
    expect(wrapper.classes('primary')).toBe(true)
  })

}
```
Run `npm run test:unit`, and it will fail.

### Passing the primary button styles test

Now to pass this test, you need to add a `type` prop to your `TDDButton` component that also conditionally adds the `type` prop's value to the `<button>`'s class list.

While you do this, you will also add styles to the `primary` class, so you can add the variation to your Storybook sandbox.

So here's how you do all of that.
```javascript
<template>
  // Adding the type prop's value to the class list of the 'button' element
  <button class="TDDButton" :class="type">{{ label }}</button>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton',
  // Adding 'label' prop
  props: ['label', 'type']
}
</script>
  
<style>
.TDDButton {
  all: unset;
  font-family: sans-serif;
  padding: .5rem 1rem;
  border-radius: .25rem;
  cursor: pointer;
  background: lightgray;
}

// Adding the primary styles to the 'primary' class
.primary {
  background: deeppink;
  color: white;
}
</style>
```
Once you're done with that, run `npm run test:unit` to see the test pass, but if you run `npm run storybook` to see your `TDDButton` component's primary styles, you will notice that nothing has changed.

Let's fix that.

## Adding your TDDButton's primary style to Storybook

Now to shift gears a bit, you are going to want to document the different styles of your `TDDButton` component in your Storybook sandbox.

If you recall, you added this bit of code to your `TDDButton.stories.js` file near the beginning of this article that was responsible for setting up the default style of your `TDDButton` component in your Storybook sandbox.
```javascript
// Adding your TDDButton component
import TDDButton from '../src/components/TDDButton.vue'

// Adding your TDDButton component to your Storybook sandbox
export default {
  title: 'TDDButton',
  component: TDDButton
}

// Adding a Default style'd component to your Storybook sandbox's TDDButton
export const Default = () => ({
  components: { TDDButton },
  template: '<TDDButton label="Default" />'
})
```
To add your `TDDButton`'s primary style, you simply need to:

- Clone the bit of code where you are *"Adding the Default style'd component"*
- Change the exported `const` name to `Primary`
- Pass the value `Primary` to the `label` prop
- And then pass the value `primary` to a `type` prop

Here's what your `TDDButton.stories.js` file should like when you are done.
```javascript
// Adding your TDDButton component
import TDDButton from '../src/components/TDDButton.vue'

// Adding your TDDButton component to your Storybook sandbox
export default {
  title: 'TDDButton',
  component: TDDButton
}

// Adding a Default style'd component to your Storybook sandbox's TDDButton
export const Default = () => ({
  components: { TDDButton },
  template: '<TDDButton label="Default" />'
})

// Adding a Primary style'd component to your Storybook sandbox's TDDButton
export const Primary = () => ({
  components: { TDDButton },
  template: '<TDDButton label="Primary" type="primary" />'
});
```
Once you have finished this, run `npm run storybook`, and you will see a new "Story" in the left sidebar called `Primary` that has a version of your `TDDButton` component with your primary styles.

## Writing a click listener test

Finally, since your `TDDButton` component is a button, you will want to test if it emits a `click` event.

In order to write this test, you will need to use the Vue Test Utils `trigger()` method to virtually click your `TDDButton` during your test and then listen for a `click` event to be emitted.

Here's the [documentation page](https://vue-test-utils.vuejs.org/api/wrapper/trigger.html) for the trigger method, and here's how you write this test.
```javascript
// ...continuation of your TDDButton.spec.js file

describe('TDDButton', () => {
  
  // Checking if the component's name is 'TDDButton'
  it('Named TDDButton', () => {
    expect(wrapper.name()).toBe('TDDButton')
  })
  
  // Checking if the component contains a 'button' element
  it('Contains a button element', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  
  // Checking if the component renders the label on the 'button' element
  it('Renders button text using a label prop', () => {
    wrapper.setProps({ label: 'Call to action' })
    expect(wrapper.text()).toBe('Call to action')
  })
  
  // Checking if the component has the default 'TDDButton' class
  it('Has default button styles', () => {
    expect(wrapper.classes('TDDButton')).toBe(true)
  })
  
  // Checking if the component has the 'primary' class when 'primary'
  // is the value of the 'type' propery
  it('Has primary styles', () => {
    wrapper.setProps({ type: 'primary' })
    expect(wrapper.classes('primary')).toBe(true)
  })
  
  // Checking if a 'click' event is emitted when the component is clicked
  it('Emits a click event when clicked', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

}
```
Now if you run `npm run test:unit`, this will of course fail.

### Passing the click listener test

In order to pass this test, you have to add a `@click` listener on your `TDDButton`'s `<button>` element that emits a `click` event.

Here's how to do this.
```javascript
<template>
  // Adding the '@click' event listener that emits a 'click' event
  <button class="TDDButton" :class="type" @click="$emit('click')">{{ label }}</button>
</template>

// Adding a name to your TDDButton component
<script>
export default {
  name: 'TDDButton',
  // Adding 'label' prop
  props: ['label', 'type']
}
</script>
  
<style>
.TDDButton {
  all: unset;
  font-family: sans-serif;
  padding: .5rem 1rem;
  border-radius: .25rem;
  cursor: pointer;
  background: lightgray;
}

// Adding the primary styles to the 'primary' class
.primary {
  background: deeppink;
  color: white;
}
</style>
```
Now if you run `npm run test:unit`, you will see that this test passes.

Congratulations! You have learned the basics of building custom Vue components in isolation using Test Driven Development (TDD).

## Conclusion

Vue components are simple in concept. 

They are small, modular, reusable User Interface building blocks that unlock the ability to rapidly create robust application front ends.

However, in order to build a component design system that works correctly every time, a contract of expected behaviors must be enforced for every component in the entire system.

For instance, in order for a user to accomplish a specific task, they must interact with components X, Y, and Z, and those components **must** correctly do their jobs in order to satisfy the users' expectations.

If they fail our users, we fail our users, and Test Driven Development is one of the best ways to ensure that our components don't let our users down and bugs don't run rampant in our software.

With all of this said, Test Driven Development does slow down the development process, so if you or your team is crunched for time and need to move fast, it may not be best for you, but if you value stability, it is definitely worth it.

You will always get faster with practice.
