---
title: How to make an API from scraped data using Express & Puppeteer
---

In this article, I'm going to show you how to make an extremely simple API using Express & Puppeteer that gives a user the ability to fetch a JSON object that includes every Digimon's name from [this website](http://digidb.io/digimon-list/).

So let's get started.

## Setting up our project using the terminal

First things first, open up your terminal, navigate to where you want this project to live, and execute the following command.
```
mkdir digimon-name-api
```

Now, move into your new directory.
```
cd digimon-name-api
```

And then create your `package.json` file. 

This is the file that tracks all of the specific details of your project.
```
npm init -y
```

Now that you have your `package.json` file, install Express and Puppeteer.
```
npm i express puppeteer
```

And then install Nodemon as a development dependency. 

If you haven't heard of Nodemon, you're welcome, and I will explain what it is a little later.
```
npm i nodemon --save-dev
```

Now go ahead and create your app's entry point.
```
touch index.js
```

And then, open up your project in our code editor.
```
code .
```

## Set up Express

In your `index.js` file, add and initialize Express.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
```
Next, make Express listen on port 7000.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express

// Making Express listen on port 7000
app.listen(7000, function () {
  console.log(`Running on port 7000.`);
});
```
## Set up Nodemon

Inside of the `scripts` object, add `"dev": "nodemon index"`. 

Now when you run `npm run dev` in your terminal, Nodemon will watch for your code changes and restart your Express server, so you don't have to.
```javascript
{
  "name": "digimon-name-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index" // Setting up Nodemon
  },
  "keywords": [],
  "author": "Shadow Smith",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "puppeteer": "^2.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
}
```
## Set up Puppeteer

Whenever you want to scrape data from a website, one of the ways you can do this is by using Puppeteer.

On [Puppeteer's documentation](https://pptr.dev/), Puppeteer is described as...

> ...a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

So in layman's terms, we are able to control a browser using code.

Now get to it and add Puppeteer to your `index.js` file like so.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```
Now that Puppeteer is added, launch your Puppeteer controlled headless browser and navigate to the Digimon website that contains the details this API will scrape.

**Please note:** It is important to always close the browser when you are done because it will slowly eat away at your computer's processing power.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function(browser) {
  const page = await browser.newPage();
  await page.goto('http://digidb.io/digimon-list/');
  
  // Closing the Puppeteer controlled headless browser
  await browser.close();
});

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```
So this is pretty cool, but there is no way to confirm that this is *actually* working.

One way to confirm it's working is to take a screenshot of the page using Puppeteer and save it in your project.

This is how you do that.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function(browser) {
  const page = await browser.newPage();
  await page.goto('http://digidb.io/digimon-list/');

  // Taking a screenshot of the page and saving it
  await page.screenshot({path: 'digimon-website.png'});
  
  // Closing the Puppeteer controlled headless browser
  await browser.close();
});

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```
If you see a screenshot that looks like DigiDB, everything is working properly.

## Scrape Digimon names

In order to scrape multiple names, you have to use the `page.$$eval()` Puppeteer method.

This method gives you the ability to query the DOM for specific Nodes and then pass those Nodes into a callback function to pull data off of each them.

So now, remove the code that takes the screenshot and replace it with the code below that targets the DOM Nodes that contain the Digimon names and then maps them to an array using `$$eval`'s callback function.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function(browser) {
  const page = await browser.newPage();
  await page.goto('http://digidb.io/digimon-list/');

  // Targeting the DOM Nodes that contain the Digimon names
  const digimonNames = await page.$$eval('#digiList tbody tr td:nth-child(2) a', function(digimons) {
    // Mapping each Digimon name to an array
    return digimons.map(function(digimon) {
      return digimon.innerText;
    });
  });
  
  // Closing the Puppeteer controlled headless browser
  await browser.close();
});

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```
## Log the Digimon names as a test

Add a simple `console.log(digimonNames);` bit of code just below our last code addition, and you should see a large array of Digimon names printed to your terminal.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function(browser) {
  const page = await browser.newPage();
  await page.goto('http://digidb.io/digimon-list/');

  // Targeting the DOM Nodes that contain the Digimon names
  const digimonNames = await page.$$eval('#digiList tbody tr td:nth-child(2) a', function(digimons) {
    // Mapping each Digimon name to an array
    return digimons.map(function(digimon) {
      return digimon.innerText;
    });
  });
  
  // Log the array of Digimon names to the terminal
  console.log(digimonNames);
  
  // Closing the Puppeteer controlled headless browser
  await browser.close();
});

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```
## Adding a simple API route

Awesome! 

Now that you have successfully scraped all of the Digimon names from the DigiDB website, all you have to do is set up a simple API route that will return the Digimon names when a user does a GET request against it.

Remove the `console.log(digimonNames);` bit of code from the last step and add a simple GET request route as a test.

Now, use [Postman](https://www.getpostman.com/) to perform a GET request against `http://localhost:7000`, and you should see the response "Test".
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Launching the Puppeteer controlled headless browser and navigate to the Digimon website
puppeteer.launch().then(async function(browser) {
  const page = await browser.newPage();
  await page.goto('http://digidb.io/digimon-list/');

  // Targeting the DOM Nodes that contain the Digimon names
  const digimonNames = await page.$$eval('#digiList tbody tr td:nth-child(2) a', function(digimons) {
    // Mapping each Digimon name to an array
    return digimons.map(function(digimon) {
      return digimon.innerText;
    });
  });
  
  // Closing the Puppeteer controlled headless browser
  await browser.close();
  
  // Adding simple GET request route as a test
  app.get('/', function(req, res) {
    // Sending 'Test' back to Postman
    res.send('Test');
  });
});

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```
Wrap the Puppeteer browser logic with the GET API route and change `res.send('Test');` to `res.send(digimonNames);`.

Now when you perform a GET request against `http://localhost:7000`, you should see the Digimon names array in Postman.
```javascript
const express = require('express'); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require('puppeteer'); // Adding Puppeteer

// Wrapping the Puppeteer browser logic in a GET request
app.get('/', function(req, res) {

  // Launching the Puppeteer controlled headless browser and navigate to the Digimon website
  puppeteer.launch().then(async function(browser) {
    const page = await browser.newPage();
    await page.goto('http://digidb.io/digimon-list/');
  
    // Targeting the DOM Nodes that contain the Digimon names
    const digimonNames = await page.$$eval('#digiList tbody tr td:nth-child(2) a', function(digimons) {
      // Mapping each Digimon name to an array
      return digimons.map(function(digimon) {
        return digimon.innerText;
      });
    });
    
    // Closing the Puppeteer controlled headless browser
    await browser.close();
    
    // Sending the Digimon names to Postman
    res.send(digimonNames);
  });
});

// Making Express listen on port 7000
app.listen(7000, function() {
  console.log('Running on port 7000.');
});
```

And you're done!

Congratulations! Now you just need to deploy it to [Heroku](https://www.heroku.com/) for free so the world can play with it, but that's a lesson for another day.