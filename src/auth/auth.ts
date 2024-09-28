import { auth } from 'express-oauth2-jwt-bearer';
import { env } from 'process';

// Docs: https://auth0.com/docs/secure/tokens/json-web-tokens
export const jwtCheck = auth({
  audience: `${env.AUTH0_AUDIENCE}`,
  issuerBaseURL: `${env.AUTH0_ISSUER}`,
  tokenSigningAlg: 'RS256'
});
