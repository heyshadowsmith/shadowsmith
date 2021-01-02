---
title: Love Vuetify? Meet PrimeVue, a powerful new Vue UI library
description: Follow along to learn first hand the power of PrimeVue
createdAt: 2020-01-22
---

Every Vue developer knows *of* [Vuetify](https://vuetifyjs.com/en/), the full-featured Vue UI library based on Google's [Material Design Guidelines](https://material.io/design/guidelines-overview/), but this article isn't about it at all. 

This article is about [PrimeVue](https://primefaces.org/primevue/#/).

A new UI library on the block by [PrimeTek Informatics](http://www.primetek.com.tr/index.html), that's boasting itself as "The most complete UI framework for Vue".

In the [official press release](https://www.primefaces.org/primevue-1-0-0-final-released/), PrimeTek said...

> PrimeVue is the most complete UI Component suite for Vue featuring over 50 components, theme designer, various VueCLI templates and professional support.

...and I can confirm that PrimeVue's Component Docs definitely back their claims, but you don't have to just take my word for it, [check it out yourself](https://primefaces.org/primevue/#/).

Now that you're pumped and ready to get your feet wet with PrimeVue, let's set up a Vue tinker project and mess around with a PrimeVue Button component.

## Setting up your Vue project

Open your terminal, navigate to where you want this project to be stored and do the following command.

    vue create primevue-playground

Since we're just focused on playing with PrimeVue's components, pick **default (babel, eslint).**
```
? Please pick a preset:
> default (babel, eslint)
  Manually select features
```

Once your Vue project is set up, `cd` into it and add PrimeVue and PrimeIcons using [npm](https://www.npmjs.com/).
```
cd primevue-playground && npm i primevue primeicons
```

Open your project in your code editor.
```
code .
```

Start your development server.
```
npm run serve
```

And then navigate to `http://localhost:8080/` or whatever localhost URL is shown in your terminal.

If you see the traditional Vue boilerplate landing page, you're good and ready to move on.

## Removing boilerplate fluff

Navigate to `App.vue` and copy/paste the following into it...
```javascript
<template>
  <div id="app">
    // PrimeVue Components will go here
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>
```
And just to be tidy, delete the `HelloWorld.vue` component from your `src/components/` directory.

## Adding CSS dependencies

In order for PrimeVue styles to be applied, you have to import a few CSS dependencies in your `main.js` file like this.
```javascript
import Vue from 'vue'
import App from './App.vue'

// Importing the Nova Light PrimeVue theme styles
import 'primevue/resources/themes/nova-light/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
Notice the import of the theme styles? 

Yeah, PrimeVue comes out-of-the-box with 9 different free themes.

You can use one of those 9, hack on the CSS yourself, buy one of 6 of their other premium themes, or purchase a license to use their Prime Designer API to make your own.

**Also, this is a good time to say that I am not sponsored by PrimeTek, and this isn't an affiliate promotion. I'm just letting you know your style customization options.**

## Setting the stage for playing with PrimeVue components

This step is totally optional, but I like to center components in the middle of the screen when I mess around with them, and I thought you might to.

To do this, add this `<style>` tag and everything in it to the bottom of your `App.vue` file.
```css
<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
Once you do this, your `App.vue` file should look like this.
```javascript
<template>
  <div id="app">
    //  PrimeVue Components will go here
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
## Adding a PrimeVue Button component

Now that you're ready to play with PrimeVue components, add a `<Button />` by doing the following:

1. Add `import Button from 'primevue/button';` right after the opening `<script>` tag in your `App.vue` file.
2. Register the `Button` component by putting `Button` in the `components` object on your `App.vue` file's Vue instance.
3. And then add `<Button />` to your `App.vue` component template inside the `<div>` with the id of `app`.

Once you have completed these 3 steps, your `App.vue` file should look like this.
```javascript
<template>
  <div id="app">
    // Step 3. Adding PrimeVue Button to template
    <Button />
  </div>
</template>

<script>
// Step 1. Adding PrimeVue Button
import Button from 'primevue/button';

export default {
  name: 'app',
  components: {
    // Step 2. Registering PrimeVue Button
    Button
  }
}

</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
Now head on over to `http://localhost:8080/` and make fun of how wimpy your button looks!

So next you're going to learn how to use the [PrimeVue Button's props and classes](https://primefaces.org/primevue/#/button) to change that.

## Adding text to your PrimeVue Button

This is super straightforward. 

Just add a `label` attribute to your PrimeVue Button and pass it a value like `Primary`.
```javascript
<template>
  <div id="app">
    // Adding Primary label to PrimeVue Button
    <Button label="Primary" />
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'app',
  components: {
    Button
  }
}

</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
Now take a peek at `http://localhost:8080/`.

Your button says `Primary` and looks pretty good, but now let's add an icon!

## Adding an icon to your PrimeVue Button

To add an icon to your `<Button label="Primary" />` component, head on over to [this PrimeIcons showcase page](https://www.primefaces.org/showcase/ui/misc/primeicons.xhtml) and locate an icon you would like to add.

Then add the `icon` attribute with the name of the icon you want while following PrimeIcons' `pi pi-{icon name}` naming convention.

So for instance, if you like the `plus` icon, you would add `icon="pi pi-plus"` to your `<Button label="Primary" />` component like this.
```javascript
<template>
  <div id="app">
    // Adding the plus icon to your PrimeVue Button
    <Button label="Primary" icon="pi pi-plus" />
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'app',
  components: {
    Button
  }
}

</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
## Changing the PrimeVue Button's color

Now to change your `<Button />`'s color, clone your `<Button label="Primary" icon="pi pi-plus" />` component and change the `label` to `Success` like so.
```javascript
<template>
  <div id="app">
    <Button label="Primary" icon="pi pi-plus" />
    // Adding 2nd PrimeVue Button labeled "Success"
    <Button label="Success" icon="pi pi-plus" />
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'app',
  components: {
    Button
  }
}

</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
Now add the class `p-button-success` to your new `<Button label="Success" icon="pi pi-plus" />` component...
```javascript
<template>
  <div id="app">
    <Button label="Primary" icon="pi pi-plus" />
    // Adding the class "p-button-success" to the 2nd PrimeVue Button labeled "Success"
    <Button label="Success" icon="pi pi-plus" class="p-button-success" />
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'app',
  components: {
    Button
  }
}

</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
...and you will see a second green button in your browser labeled "Success".

Now for kicks, change your new `<Button label="Success" icon="pi pi-plus" class="p-button-success" />` component's `icon` attribute to `pi pi-check` to change the icon to a check mark.

## Changing your PrimeVue theme

To change your PrimeVue theme, all you have to do is change the 1st CSS import in your `main.js` file.

So give it a try!

Change your theme from the Nova Light theme to the Rhea theme by changing your 1st CSS import to `import 'primevue/resources/themes/rhea/theme.css';`.
```javascript
import Vue from 'vue'
import App from './App.vue'

// Importing the Rhea PrimeVue theme styles
import 'primevue/resources/themes/rhea/theme.css';

// Importing the base PrimeVue component styles
import 'primevue/resources/primevue.min.css';

// Importing the base PrimeIcon styles
import 'primeicons/primeicons.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
Now head over to your browser and take a look at the fresh new style!

Super easy stuff.

## Final thoughts

I highly recommend you invest the time, dive deeper into the [PrimeVue Documentation](https://primefaces.org/primevue/#/), and keep playing with all of the components at your disposal.

Building a custom UI Component library that is beautiful, flexible, feature rich, and adheres to Section 508 Accessibility standards is **very. very. hard.**—especially for startups, tinkerers, and hobbyists.

And when it comes to larger companies and teams, there is a higher return on investment if time is spent on solving business problems that provide value to their customers, over building and maintaining all of the little puzzle pieces in between.

I'm definitely not saying that PrimeVue, Vuetify, Quasar, and other Vue UI Libraries are a magic bullet for every Vue team, but they absolutely have their place in the Vue ecosystem.

And in regards to PrimeVue, PrimeTek stated in their press release that their...

> ...goal is to make PrimeVue a well-known and valuable member of the Vue Ecosystem in 2020...

...and from what I have seen, it appears they have hit the ground running.
