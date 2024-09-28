import { auth } from 'express-oauth2-jwt-bearer';
import { env } from 'process';

export const jwtCheck = auth({
  audience: `${env.AUTH0_AUDIENCE}`,
  issuerBaseURL: `${env.AUTH0_ISSUER}`,
  tokenSigningAlg: 'RS256'
});
