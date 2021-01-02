---
title: Deploy a static site with a working form using Netlify
description: Learn how to host websites that have fully functioning forms for free
createdAt: 2020-07-31
---
In this article, I'm going to show you how to build a simple website with a form and bring it all to life using Netlify.

This article is intentionally focused on more primitive concepts leaving out styling and just focusing on the foreign part—adding a dynamic form using Netlify.

I am also not covering Git to keep the barrier to entry lower, but I highly recommend you learn how to use it because Netlify is designed to auto-deploy Git repositories over the drag-and-drop to deploy method I use in this article. So please learn this next.

With all of that out of the way, let's get started.

## Project setup

Since Netlify deploys static files as websites, I can keep this tutorial simple by demonstrating everything using just an `index.html` file and a `thanks.html` file, but you could easily Google around for a free HTML5 website template and begin there if you wanted a fleshed out website.

1. Create a folder on your computer to hold your project.
2. Create an `index.html` file, and go ahead and throw this HTML in it.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Business Website</title>
</head>
<body>
  <h1>Making the world a better place</h1>
</body>
</html>
```

3. Create a `thanks.html` file and add this HTML.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Business Website | Thanks</title>
</head>
<body>
  <h1>Thanks for reaching out</h1>
</body>
</html>
```

## Add your form

1. In your `index.html` file add the following form HTML.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Business Website</title>
</head>
<body>
  <h1>Making the world a better place</h1>
  
  <!-- Form -->
  <form>
    <label for="name">Name:</label>
    <input type="text" name="name">
    <button type="submit">Send</button>
  </form>
  <!-- /Form -->
</body>
</html>
```

2. Add the magic `netlify` attribute to your form.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Business Website</title>
</head>
<body>
  <h1>Making the world a better place</h1>

  <!-- Add netlify attribute to Form -->
  <form netlify>
    <label for="name">Name:</label>
    <input type="text" name="name">
    <button type="submit">Send</button>
  </form>
</body>
</html>
```
When you ultimately deploy your site to Netlify, Netlify will crawl your HTML looking for _hooks_ to add in dynamic functionality, and by adding `netlify` to a form tag, you are telling Netlify to store that form's submissions for you.

By default your submissions are only stored in your Netlify account, but you have the ability to set up **Form notifications** to receive the submissions via email which will be covered in this article as well.

3. Add a `name` to your form
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Business Website</title>
</head>
<body>
  <h1>Making the world a better place</h1>

  <!-- Add Form name -->
  <form netlify name="Small Business Form">
    <label for="name">Name:</label>
    <input type="text" name="name">
    <button type="submit">Send</button>
  </form>
</body>
</html>
```
The value you provide to the `name` attribute will be used by Netlify and will become the name of this form in your account, so if you need multiple forms on a site, be sure to give them all unique names.

## Add a redirect to your custom Thank You page on form submission

If you were to deploy just the `index.html` file to Netlify at this point, everything would work, and Netlify would even send people who submit the form to an auto-generated thank you page.

But it's not _your_ thank you page, so you're going to change that now.

Luckily, Netlify makes this extremely easy as well. 

All you have to do is add an `action` attribute to the form with the value being a relative path to another page.

In your case, this is going to be `action="/thanks.html"`, and once you add this, your HTML should look like this.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Small Business Website</title>
</head>
<body>
  <h1>Making the world a better place</h1>

  <!-- Add action attribute to Form -->
  <form netlify name="Small Business Form" action="/thanks.html">
    <label for="name">Name:</label>
    <input type="text" name="name">
    <button type="submit">Send</button>
  </form>
</body>
</html>
```
And that's it for your website.

Now we can move on to deploying your website to Netlify, updating your domain name, and setting up Form Notifications.
## Deploy your website to Netlify
1. [Create a free Netlify account](https://app.netlify.com/signup)
2. Drag and drop your project folder like so.

![Drag and Drop to Netlify](/img/deploy-a-static-site-with-a-working-form-using-netlify/drag-and-drop-to-netlify.gif "Drag and Drop to Netlify")

## Update your domain name

Netlify gives you the ability to use a custom domain like `https://shadowsmith.com` or you can stick with using a subdomain of `netlify.app` for free.

I highly encourage you use a custom domain, but for this demonstration, we are just going to update the subdomain.

By default, Netlify assigns a random subdomain like `adoring-ritchie-fbd944` to your website, so you're going to update that now.

1. In the navigation, click **Settings**.
2. In the side navigation, click **Domain management**.
3. In the **Custom domains** section, click the **Options** dropdown and click **Edit site name**.
4. Change the site name to what ever you would like.

Once you have finished that, you will see that your website's domain name has been updated to `https://[your-site-name].netlify.app`.

## Set up Form Notifications

As mentioned earlier, Netlify stores all contact form submissions in your account only by default, but you have the ability to set up email notifications to be triggered as well.

Here's how.

1. In the navigation, click **Settings**.
2. In the side navigation, click **Forms**.
3. In the **Form notifications** section under **Outgoing notifications**, click the **Add notification** dropdown and select **Email notification**.
4. Keep the **Event to listen for** field set to **New form submission**.
5. Set the **Email to notify** field to whatever email you wish to receive your website's form submissions.
6. Keep the **Form** field set to **Any form**.

## Give your form a try

Go to `https://[your-site-name].netlify.app`, enter a name in the input, and hit enter.

If you did everything correctly, you should receive an email notification from Netlify with the name you just submitted through the form—all without having to deal with writing server-side code.

## Conclusion

Instead of paying a monthly cost to have a hosting provider host your static websites, you can use this guide and have Netlify host all of your static websites for free—all you have to pay for is the yearly domain name costs if you choose to use a custom domain name.

Just keep in mind that Netlify's free tier covers 100 contact form submissions per month, but this generally covers the needs of simple  portfolio, small business, and startup websites.

Now with this information, you have no excuse not to finally redo your Dad's simple construction company site.
