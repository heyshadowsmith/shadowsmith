---
title: What is Apollo Link and its purpose in the GraphQL ecosystem?
---

To kick this explanation off, the [Apollo Link Documentation](https://www.apollographql.com/docs/link/) describes Apollo Link as...

> A standard interface for modifying control flow of GraphQL requests and fetching GraphQL results.

...but what does that really mean?

Personally, I feel the easiest way to begin understanding Apollo Link is to first understand what problem Apollo Link has been built to solve.

In the [original Apollo Link announcement post](https://blog.apollographql.com/apollo-link-the-modular-graphql-network-stack-3b6d5fcf9244), the Apollo team explains that the GraphQL developer community, as a whole, has varying functionality requirements for a GraphQL client library, and because of this, they simply could not add every needed functionality to Apollo Client core.

So on July, 25th 2017, the Apollo team introduced Apollo Link as a way to add modular pieces of functionality to Apollo Client, effectively allowing the community to create customized versions of Apollo Client to satisfy their specific GraphQL Clients needs.

To further elaborate on this definition, let's break down this simple passage from the Apollo Link documentation.

> You've probably come across "middleware" that might transform a request and its result: Apollo Link is an abstraction that's meant to solve similar problems in a much more flexible and elegant way.

So essentially in layman's terms, Apollo Link is a simple-to-use toolkit that contains optional helpers that are designed to solve common problems between your frontend application's Apollo Client and your backend GraphQL API server.

To check out all of Apollo's developed Links, [head on over to the Apollo Link Documentation](https://www.apollographql.com/docs/link/) and browse through them, and while you're at it, the GraphQL community can also create [custom Apollo Links](https://www.apollographql.com/docs/link/links/community/) that solve niche edge cases, so be sure to check those out as well.