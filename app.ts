import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';
import cors from 'cors';

import v1Router from './src/route/v1';

const appV1 = express();
appV1.use(cors({ optionsSuccessStatus: 200 }));
appV1.use(bodyParser.json({ strict: true }));
appV1.use(bodyParser.urlencoded({ extended: true }));

appV1.use('/v1', v1Router.router);

module.exports.v1 = serverless(appV1)
