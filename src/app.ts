// express
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
// config
import appInit from './config/init';
import appMiddlewares from './config/middlewares';
import appRouter from './config/router';

void appInit(app);
void appMiddlewares(app, express);
void appRouter(app);
