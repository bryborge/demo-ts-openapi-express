# Demo: OpenAPI and Express

This is a work in progress and a deep-dive learning activity to scratch an itch I've been having.

## Preamble

I should probably start by saying that I generally believe that JavaScript should remain on the client-side of the
technology stack. "Just because you can doesn't mean you should" is something I will argue any time writing server-side
JS is proposed. Yes, the ecosystem has evolved to be able to do it. No, I don't think it's generally a better fit
than, say, Python, Go, Rust, Java, C#, ... Ruby.

**However!** There are many fine reasons to go this route. For example, say you have a JavaScript-heavy team of
engineers in your organization and it will likely be a) too costly to hire for specialization in another language, or
b) too painful for them to learn a new language/framework in the amount of time you have to get the project done.

Besides, at the end of the day, it doesn't **actually** matter what language(s) or framework(s) one chooses. At least,
not nearly as much as we might sometimes think it does. So ...

## Purpose

Given that preamble, why this project?  Why demo a server-side RESTful API written in JavaScript at all?

Well, if you must do it, then it should be done in a way that supports the longevity and overall success of the project
or initiative you're doing it for. To that end, I have found it challenging to dig up any sane and thoroughly documented
projects that use JavaScript while also demonstrating the following:

*   Strict typing
*   Composability and scalability
*   Is well documented
*   Is secure

When this demo is complete (TBD), it should tick all these boxes.  In other words, it should serve as a clear example
of what a "production-ready" API looks like, and illustrate how one might use NodeJS/Express to develop a RESTful API in
a composable, contract-first way, leveraging the OpenAPI specification (OAS).

### Contract-First

The benefits of this approach over code-first are numerous. By front-loading your API project with sufficient planning,
and designing it against a widely adopted standard like OAS, you are more likely to end up with a mature, consistent, 
easy-to-understand, well-documented, and maintainable piece of software.  Invariably, this also will more likely result
in less friction during development and a generally nicer developer experience.

## Technologies Used

*   OpenAPI (contract-first development methodology)
*   Typescript
*   Express

## Future Work

Following is a list of work I intend to work through before calling this demo "complete."

### General

*   Testing
    *   Unit
    *   Integration
*   Observability (MELT)
    *   Monitoring
    *   Events
    *   Logging
    *   Tracing
*   Performance (and Scalability/Resilience)
    *   Rate Limiting
    *   Pagination
*   Security
    *   Authentication

### Project Design

*   To-do CRUD paths, components/schemas

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
