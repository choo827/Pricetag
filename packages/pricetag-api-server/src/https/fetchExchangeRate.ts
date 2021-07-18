import 'reflect-metadata';
import 'source-map-support/register';
import type { APIGatewayProxyHandler } from 'aws-lambda';
import { exceptionCatcher } from 'middlewares/exceptionCatcher';
import { applyMiddlewares } from 'utils/applyMiddlewares';
import { ok } from 'utils/generateResponses';

export const handler: APIGatewayProxyHandler = applyMiddlewares(
  exceptionCatcher,
)(async (event, context, callback) => {
  return ok('application', { hello: 'fucking' });
});
