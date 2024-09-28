# Demo: OpenAPI and Express

This is a work in progress and a deep-dive learning activity to scratch an itch I've been having.

## Purpose

I have found it challenging to dig up any sane and thoroughly documented projects that use JavaScript while also
demonstrating the following:

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

That's the idea anyway.

## Technologies Used

*   OpenAPI Specification
*   Typescript
*   Express
*   Auth0

## Future Work

Following is a list of work I intend to work through before calling this demo "complete."

### General

*   Behavior
    *   Error handling
    *   Validations
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

### Auth0

This project uses Auth0 to secure all API endpoints (the /docs pages are publicly available). To use this API, you will
need a valid JWT sent as an `authorization` header of your requests.  For ease of development, Auth0 is not enabled when
the application environment is set to `development`.

### API Documentation

The documentation for the API is automatically generated from the openapi specification file and can be accessed at:

```sh
localhost:8080/docs
```

## Further Reading

*   [The OpenAPI Specification (Github)](https://github.com/OAI/OpenAPI-Specification)
*   [Auth0 JWT Documentation](https://auth0.com/docs/secure/tokens/json-web-tokens)
