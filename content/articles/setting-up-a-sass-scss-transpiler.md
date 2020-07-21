---
title: Setting up a SASS/SCSS transpiler
---

If you have come across this article, chances are you are aware of
what SASS is and why you want to use it, but in the off chance you
didn't, here's what it's all about.

## What is SASS?

Syntactically Awesome Stylesheets (SASS) is a CSS pre-processor that
extends the capabilities of traditional CSS by infusing it with syntax
upgrades and programmatic logic based concepts like:

- Variables
- Mixins
- Imports
- Nested Syntax

## What is SCSS?

Sassy CSS (SCSS) is an alternate syntax for SASS that enables you to
write vanilla CSS and have it correctly transpile to correct CSS.

## What is Transpiling?

Transpiling is the process of taking one language, or pre-processor in this case, and converting it to another.

## How to setup a SASS/SCSS transpiler

1. **Install Node.js** Node.js must be installed on your machine in order to access [NPM](https://www.npmjs.com/) (Node Package Manager). NPM is a tool front-end developers use to manage project dependencies. [Go here to install Node.js](https://nodejs.org/en/).

2. **Open the Node.js Command Prompt**<br/>
The Node.js Command Prompt is where we will access NPM, install the the `node-sass` package, and setup our transpile script command in our `package.json` file.

3. **Navigate to where your project is located**<br/>
To do this, type: `cd project-folder-name`

4. **Create your package.json file**<br/>
To do this, type: `npm init`

5. **Install the node-sass NPM package**<br/>
For the scope of this article, I'm going to gloss over exactly what the `node-sass` package is, but if you would like to learn more, [read the node-sass NPM page](https://www.npmjs.com/package/node-sass). To install the `node-sass` package as a Development Dependency, type: `npm install node-sass --save -D`

6. **Add your transpile script command to your package.json file**<br/>
In your package.json file, you are going to add the following line of code to your scripts:`"your-script-name": "node-sass -w [SASS Directory] -o [CSS Directory]`

For your comprehension, let's go through the transpile script word for word.

1. `"your-script-name"`<br/>
This is whatever you would like to call this script. You will use it in the Command Prompt to start your transpiler.

2. `-w`<br/>
Short for `--watch`, this is an optional flag that tells `node-sass` to transpile your SASS/SCSS every time there is a change.

3. `[SASS Directory]`<br/>
This tells `node-sass` where to look for your SASS/SCSS code.

4. `-o [CSS Directory]`<br/>
This tells `node-sass` where to output your newly transpiled CSS code.

Once you have added your script, your package.json file should look something like this

```json
    {
    	"name":"sass-demo",
    	"version":"1.0.0",
    	"description":"Setting up a SASS/SCSS transpiler",
    	"main":"index.js",
    	"scripts": {
    	"sass-transpile":"node-sass -w scss -o css"
    },
    	"author":"Shadow Smith",
    	"license":"MIT",
    	"devDependencies": {
    		"node-sass":"^4.9.3"
    	}
    }
```

To start your transpiler, run your script in the Command Line `npm run your-script-name`

Once you have ran your script, the `node-sass` package will keep an eye on any changes inside of your SASS/SCSS directory and instantly transpile them into beautiful CSS.