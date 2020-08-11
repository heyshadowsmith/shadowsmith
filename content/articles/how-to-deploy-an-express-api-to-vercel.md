---
title: How to deploy an Express API to Vercel
description: A simple guide showing you how to deploy an Express API as serverless functions on Vercel
---
Have a project that uses a slow but free Heroku dyno to host some Node server that runs an Express API?

Or are you using some other Node server solution that costs money?
 
In this article, I'm going to show you how to deploy an Express API to Vercel as a serverless function, so you can get a blazing fast CDN served API for free.

If you have an Express API already, you can skip step 2, but for guide completeness, I added a quick Express API that you can simply copy and paste if needed.
 
Let's get started.

## 1. Create your Vercel Account

First thing's first, [sign up for Vercel using your GitHub, GitLab, or Bitbucket account](https://vercel.com/signup) and give Vercel access to your repos.

Just by doing this one thing, Vercel will begin to look for `vercel.json` or `now.json` files during any Git pushes to your projects, and if it finds one, it will link the project across services and spin up a CI pipeline for that repo.

This CI pipeline will do an initial deployment and then create [Preview Deployments](https://vercel.com/docs/platform/deployments#preview) for every subsequent commit on every branch.

## 2. Create a simple Express API (unless you have your own)
If you haven't yet, [install Node and NPM](/how-to-install-node).

Create a repo, clone it to your local machine, and `cd` into it.

Then use the following command to create your `package.json` file quickly with the default options.
```
npm init -y
```
After that, install [Express](https://expressjs.com/)...
```
npm i express
```
...create your `index.js` file, and proceed to getting the boilerplate out of the way by...
```
touch index.js
```
...adding Express, initializing it, creating a simple GET request that responds to requests with "Express on Vercel", and setting your server up on port 5000.
```js
// Add Express
const express = require('express')

// Initialize Express
const app = express()

// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel')
})

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.')
})
```
*Technically, you don't have to initialize the server for this to work but chances are any Express API you have will have a server initialization, and this also gives you the ability to easily run `node index` while working with your Express API locally.*
## 3. Export the Express API
Now in order for Vercel to turn Express into a serverless function, you have to export the Express instance for Vercel's build process.
```js
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Express on Vercel')
})

app.listen(5000, () => {
  console.log('Running on port 5000.')
})

// Export the Express API
module.exports = app
```
## 4. Add vercel.json configuration
After exporting Express, we have to tell Vercel what files to build, how to build them, and how to route them using a `vercel.json` file.

So create a `vercel.json` file.

```
touch vercel.json
```
Then using Vercel Platform version 2, specify your `index.js` file and the NPM module Vercel will use to turn it into a serverless function...
```json
{
    "version": 2,
    "builds": [
        {
            // Specify file to convert to a serverless function
            "src": "index.js", 
            // Specify the NPM module that is used for the build
            "use": "@now/node" 
        }
    ]
}
```
...specify which paths will route to the `index.js` file's built serverless function using regex.
```json
{
    "version": 2,
    "builds": [
        { 
            "src": "index.js", 
            "use": "@now/node" 
        }
    ],
    "routes": [
        {
            // Specify which paths will route to a destination using a regex
            "src": "/(.*)", 
            // Specify the paths' destination
            "dest": "index.js" 
        }
    ]
}
```
## 5. Deploy your Express API
Finally, push your project up to your source repository, and Vercel will use your `vercel.json` configuration file to build your Express API and deploy it as a serverless function.

Once the build process is complete, feel free to visit the `.vercel.app` URL Vercel provides automatically to see the words "Express on Vercel".

This will confirm your API is up-and-running.

## Conclusion
It is important to note that if you are building an API from scratch with Vercel as the deployment target, you don't have to deploy an Express API to get the job done. 

You can easily create an API using exported functions placed in an `api` directory in your project's root like what is explained in [the Vercel docs](https://vercel.com/docs/serverless-functions/introduction).

However, this guide is meant to be a simplified explanation on how to prepare an Express API to be deployed using Vercel, so you can migrate your API away from a slow or costly provider.