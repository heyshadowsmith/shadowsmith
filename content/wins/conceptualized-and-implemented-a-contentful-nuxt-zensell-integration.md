---
title: Conceptualized and implemented a dynamic lead gen page creation system using Contentful
description: Created a new way to get leads from the Openly Public Website into ZenSell using Contentful and a couple serverless functions
createdAt: 2020-09-17
---
Long ago when the Openly Public Website was a [SquareSpace](https://www.squarespace.com/) website, Openly funneled leads into [ZenSell](https://www.zendesk.com/sell/) using an integration between [Jotform](https://www.jotform.com/), [Zapier](https://zapier.com/), and ZenSell.

This integration was a largely manual process and wouldn't scale as the business' needs grew.

While we were rebuilding the new [Openly Public Website](https://openly.com) from the ground up using [Nuxt](https://nuxtjs.org/), I replaced the old integration with one that leverages [Contentful](https://www.contentful.com/), Nuxt, a custom Contentful UI extension, 2 Serverless Functions, and ZenSell.

This integration has since given our internal teams the ability to create as many lead gen pages as they need, all on their own. 

In addition to being able to create as many lead gen pages as they need, they are also able to assign ZenSell specific tracking details to the leads that are created through them.

After launch, I held training classes and created video reference material on how to use the new system, and now all lead gen pages and their configurations are successfully managed by other teams using this new Contentful based system.

## My favorite part

When a lead gen page is published, unpublished, archived, or deleted, Contentful triggers a [Vercel](https://vercel.com) Webhook to rebuild and deploy the Openly Public Website using `nuxt generate` with the updated lead gen page either being statically generated and included or removed.

By statically generating the lead gen pages, the Openly Public Website doesn't have to do an API request to Contentful to gather the lead gen page's customizable SEO details and ZenSell tracking data when a user navigates to the lead gen page.

An API request to Contentful for these details only happens from the Openly Public Website if the static site generation process hasn't completed yet when a user visits the lead gen page's unique URL.

If you're interested to hear more of the details involved in this system, I am always open to chat, so feel free to reach out!