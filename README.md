# Demo: OpenAPI and Express

Technologies Used:

*   OpenAPI
*   Typescript
*   Express

## To Add

### General

*   Documentation
*   Testing
    *   Unit
    *   Integration
*   Observability
    *   Logging
    *   Monitoring
*   Performance
    *   Rate Limiting
    *   Pagination
*   Security
    *   Authentication
    *   CORS (Middleware)

### Project Design

*   Controllers
*   Models
*   Database connection
*   To Do CRUD paths, components/schemas
*   Request validation (with Zod or Valibot w/ validation-adapters/valibot)

### Dev Tooling

*   githooks
*   CI/CD
*   Terraform (for deployment to the cloud)
*   Docker (for DB and/or any other resources needed for local testing and development)

## Up and Running

*   `cp .env{.dist,}` - Copy the .env distribution file (and edit it as needed)
*   `npm run openapi:generate` - Generate the API types and interfaces from the OpenAPI specification
*   `npm run dev` - Start the server

Check out the API in the browser and/or with `curl`, `postman`, or any other favorite API tools.
