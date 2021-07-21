---
title: Published @openlyinc/get-vercel-deployment-url NPM package
description: My first Open Source NPM package under Openly, Inc.
createdAt: 2021-05-26
---

At Openly, I am responsible for setting up and maintaining the pipelines for all of our frontend applications, and of course with me being all about JAMStack, I leverage [Vercel](https://vercel.com) anywhere I can.

A tricky issue I had to solve was how to test all Vercel deployments using [Cypress](https://www.cypress.io/) in a GitLab pipeline with the actual build process happening in an External Vercel job.

I ultimately solved this problem using a custom Node CI script called `get-deployment-url.js` that would poll Vercel for the deployment's status before writing it's URL to a `vercel_deployment_url.txt` file for downstream job consumption.

This did the job, but it didn't scale.

Fast forward a few months and this Node CI script is now in 3 projects, and for some reason or other, I needed to tweak the script.

In order for the Node CI script to stay consistent across all projects, I had to copy and paste my updates everywhere. 

This is when I knew I needed to take some time and turn my custom script into an NPM package.

And today, [@openlyinc/get-vercel-deployment-url](https://www.npmjs.com/package/@openlyinc/get-vercel-deployment-url) was born.

Currently, this pipeline utility only works for Vercel team projects in GitLab pipelines, but I aim to add support for personal Vercel projects and GitHub pipelines sometime soon.
