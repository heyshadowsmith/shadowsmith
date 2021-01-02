---
title: How to test all Vercel deployments using Cypress in a GitLab pipeline
description: Learn how to host to set up a GitLab pipeline that can test every Vercel deployment using Cypress
createdAt: 2020-12-20
---

In this tutorial, I'm going to be walking you step-by-step through how to set up a simple GitLab pipeline that allows you to run automated tests against every Vercel deployment.

I assume you know what [Vercel](https://vercel.com), [Cypress](https://cypress.io), and [GitLab](https://gitlab.com) are and how to use them, so I'm going to jump straight into the "How to" details.

# 1. Add a Vercel Token to GitLab through CI / CD Settings

## Create a Vercel Token
First thing's first, we need an auth token for Vercel.

To create a token:
1. [Login to Vercel](https://vercel.com/login)
2. Click **Setting**
3. Click **Tokens**
4. Click **Create**
5. And enter a name for your token
6. Click **CREATE TOKEN**

## Add the Vercel Token to GitLab
To add our Vercel Token to GitLab, so it can be used by our job runners:
1. [Login to GitLab](https://gitlab.com/users/sign_in)
2. Click the project you want to set this pipeline up for
3. In the sidebar to the left, hover over **Setting**
4. Click **CI / CD**
5. Find **Variables** and click **Expand**
6. Click **Add Variable**
7. In the **Key** field, enter "VERCEL_TOKEN"
8. In the **Value** field, add your Vercel Token value
9. Ensure **Protect variable** and **Mask variable** are checked
10. Click **Add variable**

# 2. Write our .gitlab-ci.yml file
## Set the "stages"
We're going to set these as:
```
stages:
  - deploy
  - test
```

## Create the deploy-to-vercel job
Here's the `deploy-to-vercel` job section of our `.gitlab-ci.yml` file.
```
deploy-to-vercel:
  stage: deploy
  image: node:13.10.1-alpine3.10

  script:
    - npm i -g vercel
    - DEPLOYMENT_URL=$(vercel -t $VERCEL_TOKEN --confirm)
    - echo $DEPLOYMENT_URL >vercel_deployment_url.txt

  artifacts:
    when: on_success
    paths: 
      - vercel_deployment_url.txt
```

This is pretty straight forward, but I'm going to breakdown what is going on here section by section.

```
deploy-to-vercel:
  stage: deploy
  image: node:13.10.1-alpine3.10
```

This section is where we tie the `deploy-to-vercel` job to the `deploy` stage and provide a [Docker](https://www.docker.com/) image to run our [NodeJS](https://nodejs.org/en/) code.

```
  script:
    - npm i -g vercel
    - DEPLOYMENT_URL=$(vercel -t $VERCEL_TOKEN --confirm)
    - echo $DEPLOYMENT_URL >vercel_deployment_url.txt
```

This section: 
1. Installs the `vercel` CLI 
2. Links our project using our `VERCEL_TOKEN`
3. Writes the Vercel deployment URL to a text file called `vercel_deployment_url.txt`

```
  artifacts:
    when: on_success
    paths: 
      - vercel_deployment_url.txt
```

And finally, this section is where we keep the `vercel_deployment_url.txt` file as an artifact when this job succeeds, so we can read it in the next Cypress job.

## Create the cypress_test job
Here's the `cypress_test` job section of our `.gitlab-ci.yml` file.
```
cypress_test:
  image: cypress/browsers:node12.16.2-chrome81-ff75
  stage: test

  script:
    - DEPLOYMENT_URL=$(cat vercel_deployment_url.txt)
    - npm ci
    - $(npm bin)/cypress run --env CYPRESS_BASE_URL=$DEPLOYMENT_URL

  artifacts:
    when: on_success
    paths:
      - cypress/screenshots
      - cypress/videos
```
This one is a tad more complicated than the Vercel job, but again, I'm going to break it down by section.

```
cypress_test:
  image: cypress/browsers:node12.16.2-chrome81-ff75
  stage: test
```

This section is where we tie the `cypress-test` job to the `test` stage and provide a [Docker](https://www.docker.com/) image to run our tests.

```
  script:
    - DEPLOYMENT_URL=$(cat vercel_deployment_url.txt)
    - npm ci
    - $(npm bin)/cypress run --env CYPRESS_BASE_URL=$DEPLOYMENT_URL
```

This section: 
1. Reads the artifact text file `vercel_deployment_url.txt` and stores the deployment URL in a variable called "DEPLOYMENT_URL"
2. Installs our node dependencies
3. Runs our Cypress tests against our Vercel Deployment URL

```
  artifacts:
    when: on_success
    paths:
      - cypress/screenshots
      - cypress/videos
```

And finally, this section is where we keep Cypress' test screenshots and videos artifacts when this job succeeds, so we can review them, or share them with other stakeholders.

# 3. Push the .gitlab-ci.yml file up to your repo
In order for GitLab to run your pipeline, we need to push up the `.gitlab-ci.yml` file, but before you do that, ensure that yours looks like this.

```
stages:
  - deploy
  - test

deploy-to-vercel:
  stage: deploy
  image: node:13.10.1-alpine3.10

  script:
    - npm i -g vercel
    - DEPLOYMENT_URL=$(vercel -t $VERCEL_TOKEN --confirm)
    - echo $DEPLOYMENT_URL >vercel_deployment_url.txt

  artifacts:
    when: on_success
    paths: 
      - vercel_deployment_url.txt

cypress_test:
  image: cypress/browsers:node12.16.2-chrome81-ff75
  stage: test

  script:
    - DEPLOYMENT_URL=$(cat vercel_deployment_url.txt)
    - npm ci
    - $(npm bin)/cypress run --env CYPRESS_BASE_URL=$DEPLOYMENT_URL

  artifacts:
    when: on_success
    paths:
      - cypress/screenshots
      - cypress/videos
```

If your file looks like this one, feel free to push it up and watch the pipeline succeed!
