---
title: CSS On-Demand with Tailwind JIT
description: A simple introduction to Tailwind's Just-In-Time compiler
createdAt: 2021-04-04
---

No matter how hard some of us try and avoid it, as Software Engineers, we have all had to write and maintain CSS at some point in our careers.

With all of the specificity and inheritance issues, multiple stylesheets, bloated files, class naming conventions, and CSS preprocessor flavors, it can be a real nightmare, and on top of all of that mess, creating and maintaining a consistent design system is nearly impossible.

Well, what if I told you that you could create a consistent CSS design system framework in minutes that only compiles what you use out of the framework in any environment?

If you have ever had to juggle CSS, update CSS hoping you didn’t mess anything up, or purge unused CSS for Production, you should be extremely hype right now, and in this article, I'm going to briefly describe [TailwindCSS](https://tailwindcss.com) and explain some of the feature updates you get by using its new, cutting-edge Just-in-Time compiler.

## What is TailwindCSS?
Putting it simply, Tailwind is a tool used to convert a customizable design system into a low-level, utility-first CSS framework. 

Using a `tailwind.config.js` file, you are able to specify the atoms of your design system, like colors, spacing, typography, border radius, and more, in code, and Tailwind will generate a CSS framework using them. 

Tailwind is similar to other CSS frameworks in the way that it provides CSS classes to style your HTML, but Tailwind's utility classes act as low-level shortcuts to CSS properties instead of entirely styled components like you would get when using a higher-level CSS framework like Bootstrap or MaterializeCSS.

To further illustrate the difference, if you were going to make a button with Bootstrap, your HTML would look like this...
```html
<button class="btn btn-primary">Button</button>
```

And if you were going to make a button with Tailwind, your HTML would look like this...
```html
<button class="bg-blue-500 text-white py-2 px-4 rounded">Button</button>
```
See what I mean? Tailwind's CSS classes target individual CSS properties. 

It doesn't have predefined chunks of CSS to quickly make things like buttons or navbars, but that is one of its major selling points.

Tailwind is meant to be used to create unique styles for your components, so you don't have to choose between `!important` hacking a CSS framework to match your project's branding or letting the framework's opinionated styles influence your app's look.

## What is Tailwind JIT and why is it a big deal?
Tailwind JIT is an experimental "Just-In-Time" compiler added to Tailwind v2.1 that dramatically improves the Developer Experience, unlocks new features, and removes some configuration from your `tailwind.config.js` file.

### Tailwind JIT always produces the smallest CSS files
Remember how I said that you can specify the atoms of your design system in a `tailwind.config.js` file and Tailwind will generate a CSS framework using them?

Well, if your design system has a lot of atoms, the CSS file Tailwind generates can be quite large, and once a CSS file gets to be many megabytes in size, build and browser developer tools begin to break down.

Before JIT, unused Tailwind CSS classes were only trimmed when going to Production, but now with JIT, Tailwind only generates the CSS your project is currently using, making every environment's CSS identical.

With that said, you still need to tell PurgeCSS where your templates are using the `purge` option in your `tailwind.config.js` file in order for everything to work properly. 

### Tailwind JIT adds a new arbitrary styles feature
Yes, one of the major benefits to using Tailwind is generating an entire CSS framework from a configurable design system, however, from time-to-time, there are super specific use-cases that you don't want to modify your `tailwind.config.js` file to support.

A great example of this is when you need to style something to match another business' branding.

Tailwind JIT introduces a new way to generate one-off utility classes using a new square bracket based syntax to handle rare edge cases like this.

You simply pass an argument into the square bracket and Tailwind will generate the style for it on the fly.

So if you needed to make a link a specific shade of lime green and it wasn't a color in your design system, you could create an arbitrary utility class to handle it like this...
```html
<a class="text-[#86bb1b]" href="https://shadowsmith.com">Link</a>
```
And if your use-case was super weird and you only wanted to make the link lime green on large devices, these handy utility classes also work with variants, so you would do this like...
```html
<a class="lg:text-[#86bb1b]" href="https://shadowsmith.com">Link</a>
```
### Tailwind JIT adds a built-in important modifier
If you are ever working in a codebase that mixes Tailwind with some CSS that you can't easily modify, you can add a `!` at the beginning of a utility's name, and it will increase the specificity of the CSS Tailwind applies to that element. 

It is worth mentioning that the `!` always goes at the beginning of the utility name after any variants like this...
```html
<a class="lg:font-bold lg:!font-medium" href="https://shadowsmith.com">Link</a>
```
I would practice caution and only use this new feature on rare occasion as it could create a mess if abused.
 
### Tailwind JIT removes all variant configuration
Tailwind only supports a handful of variants like `hover`, `focus`, `active`, `disabled`, etc. by default, and in addition to that, only some of the variants were available for specific utility classes out-of-the-box.

Of course, with Tailwind being super customizable, you can enable additional variants, but you have to be thoughtful about the order of your variants, and you also need to be careful not to balloon your CSS file's size in development.

With all of these constraints, variant configuration is one of the main areas of friction when using Tailwind for me, but now since JIT generates styles as your utility classes are used, we now have all variants available to use with no configuration at all!

And on top of all of that awesomeness, all variants can be combined together to target hard-to-reach styling situations like this...
```html
<button class="md:dark:disabled:focus:hover:bg-gray-400">
``` 

### Conclusion
I've been using Tailwind for years, and I am extremely excited about Tailwind's new JIT engine and what new features the Tailwind Labs team will create using it.

If you have never tried Tailwind or Tailwind's JIT compiler before, there is no better time to start than now.

To learn more about Tailwind's new JIT compiler, check out my [Tailwind JIT Demo Repo](https://github.com/heyshadowsmith/tailwind-jit-demo) on GitHub and of course [Tailwind's Just-in-Time Mode documentation](https://tailwindcss.com/docs/just-in-time-mode).

