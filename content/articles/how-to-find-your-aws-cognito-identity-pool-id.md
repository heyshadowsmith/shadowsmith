---
title: How to find your AWS Cognito IdentityPoolId
description: Quickly located an AWS Cognito IdentityPoolId in minutes
---

In this post, I am outlining the specific steps needed to locate an AWS Cognito IdentityPoolId in hopes this helps someone who is looking for this answer.

## Option #1: Through the AWS Console

1. [Login to AWS](https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin)
2. Click **Services**
3. Search for **Cognito**
4. Click **Cognito**
5. Click **Manage Identity Pools**
6. Click on the name of the Identity Pool you would like the IdentityPoolId of.
7. Click on **Sample code**

You will then see a block of code that looks like this.

```js
// Initialize the Amazon Cognito credentials provider
CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    getApplicationContext(),
    "your-identity-pool-id-will-be-here", // Identity pool ID
    Regions.US_EAST // Region
);
```

## Option #2: Through the AWS CLI

1. [Install the AWS CLI on your machine](https://docs.amazonaws.cn/en_us/cli/latest/userguide/cli-chap-install.html)
2. Type `aws cognito-identity list-identity-pools --max-results 60`
3. Press `Enter`

When complete, you will see an object that looks like this.

```json
{
  "IdentityPools": [
    {
      "IdentityPoolId": "your-identity-pool-id-will-be-here",
      "IdentityPoolName": "Cognito Identity Pool"
    }
  ]
}
```