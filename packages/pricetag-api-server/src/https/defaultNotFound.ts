import 'reflect-metadata';
import 'source-map-support/register';
import type { APIGatewayProxyHandler } from 'aws-lambda';
import { STAGE } from 'constants/ENV';
import { exceptionCatcher } from 'middlewares/exceptionCatcher';
import { applyMiddlewares } from 'utils/applyMiddlewares';

export const handler: APIGatewayProxyHandler = applyMiddlewares(
  exceptionCatcher,
)(async event => {
  console.log({
    method: event.httpMethod,
    path: event.path,
  });

  return {
    statusCode: 404,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      ok: false,
      code: '404000',
      message: 'Not Found',
      details: `Invalid method or parh (${event.httpMethod} /${STAGE}${event.path})`,
    }),
  };
});
