# Demo: OpenAPI and Express

This is a work in progress and a deep-dive learning activity to scratch an itch I've been having.

## Preamble

I should probably start by saying that I fairly strongly believe that JavaScript should remain on the client-side of the
technology stack. "Just because you can doesn't mean you should" is something I will argue every time it is proposed to
write server-side JS. Yes, the ecosystem has evolved to be able to do it.  No, I don't think it's generally a better fit
than, say, Python, Go, Rust, Java, C#, ... Ruby.

However, it should also be noted that there are many fine reasons to go that route. A great example might be if you have
a JavaScript-heavy pool of engineers in your organization and it will likely be a) too costly to hire engineers who
specialize in another language, or b) too painful for them to learn a new language/framework.

## Purpose

So, given that preamble, why this project?  Why demo a server-side RESTful API written in JavaScript at all?

Well, if one must do it, then it should be done in a way that supports the longevity and overall success of the project.
I have found it challenging to find any sane and thoroughly documented project that uses JavaScript and also
demonstrates the following:

*   Strict typing
*   Composability and scalability
*   Is well documented
*   Is secure

That's not to say they don't exist ... just that there aren't many that are easy to find. So ...

The idea behind this demo is to illustrate how one might use a NodeJS/Express application to develop a RESTful API in a
composable, contract-first way, leveraging the OpenAPI standard.

The benefits of this approach is said to be `smooth development` by front-loading your API project with a healthy amount
of planning before ever writing a single line of code. This allows the architect/developer to think through the uses for
their API without getting bogged down by implementation details, which is how many project initiatives languish and
eventually die (or worse ... a half-finished, buggy frankenstein tech-debt monster emerges and is shipped to production,
and your name is cursed by every sorry future developer that has to maintain it. Not that I have any experience with
that :P ).

## Technologies Used

*   OpenAPI (contract-first development methodology)
*   Strict typing
*   Composability and scalability
*   Is well documented
*   Is secure

That's not to say they don't exist ... just that there aren't many that are easy to find. So ...

The idea behind this demo is to illustrate how one might use a NodeJS/Express application to develop a RESTful API in a
composable, contract-first way, leveraging the OpenAPI standard.

The benefits of this approach is said to be `smooth development` by front-loading your API project with a healthy amount
of planning before ever writing a single line of code. This allows the architect/developer to think through the uses for
their API without getting bogged down by implementation details, which is how many project initiatives languish and
eventually die (or worse ... a half-finished, buggy frankenstein tech-debt monster emerges and is shipped to production,
and your name is cursed by every sorry future developer that has to maintain it. Not that I have any experience with
that :P ).

## Technologies Used

*   OpenAPI (contract-first development methodology)
*   Typescript
*   Express

## Future Work
## Future Work

### General

*   Testing
    *   Unit
    *   Integration
*   Observability (MELT)
*   Observability (MELT)
    *   Monitoring
    *   Events
    *   Logging
    *   Tracing
*   Performance (and Scalability/Resilience)
    *   Events
    *   Logging
    *   Tracing
*   Performance (and Scalability/Resilience)
    *   Rate Limiting
    *   Pagination
*   Security
    *   Authentication

### Project Design

*   Models
*   To-do CRUD paths, components/schemas
*   To-do CRUD paths, components/schemas
*   Request validation (with Zod or Valibot w/ validation-adapters/valibot)

### Dev Tooling

*   githooks
*   CI/CD
*   Terraform (for deployment to the cloud)
*   Docker (for DB and/or any other resources needed for local testing and development)

### Client-side

*   A web application frontend that consumes this API (probably React and NextJS or Vite)
*   A mobile app that consumes this API (probably React Native, but possibly a Swift, Kotlin or C#/Xamarin)

## Development

### Up and Running

*   `cp .env{.dist,}` - Copy the .env distribution file (and edit it as needed)
*   `npm run openapi:generate` - Generate the API types and interfaces from the OpenAPI specification
*   `npm run dev` - Start the server

Check out the API in the browser and/or with `curl`, `postman`, or any other favorite API tools.

### API Documentation

The documentation for the API is automatically generated from the openapi specification file and can be accessed at:

```sh
localhost:8080/docs
```

## Further Reading

*   [The OpenAPI Specification (Github)](https://github.com/OAI/OpenAPI-Specification)

### API Documentation

The documentation for the API is automatically generated from the openapi specification file and can be accessed at:

```sh
localhost:8080/docs
```

## Further Reading

*   [The OpenAPI Specification (Github)](https://github.com/OAI/OpenAPI-Specification)
