---
title: Bulk deleting local Git branches using Regex
description: Clean up your local dev environment with these handy commands
createdAt: 2020-01-15
---

If you are reading this, you obviously have a need to bulk delete local Git branches because you are crushing all of your assigned Work Items.

So here's a shortcut to clean up your local environment.

Write your dry run using regex using this command formula:
```
git branch | grep [regex expression goes here]
```

So for example, to view all local branches that are prefixed with "feature", you would use the command.
```
git branch | grep feature*
```
Once you run that command and triple check that you wish to delete all of the local branches that are returned, run this command to delete them.
```
git branch | grep feature* | xargs git branch -D
```
BONUS TIP:
Here's how to delete all local branches except for master.
```
git branch | grep -v "master" | xargs git branch -D
```
You're welcome!
