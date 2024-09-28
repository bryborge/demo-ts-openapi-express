import { auth } from 'express-oauth2-jwt-bearer';
import { env } from 'process';

/**
 * Checks if the JWT is valid.
 * 
 * Requires the following environment variables to be set:
 * - `AUTH0_AUDIENCE`: The audience of the JWT.
 * - `AUTH0_ISSUER`: The issuer of the JWT.
 */
export const authCheck = auth({
  audience: `${env.AUTH0_AUDIENCE}`,
  issuerBaseURL: `${env.AUTH0_ISSUER}`,
  tokenSigningAlg: 'RS256'
});
