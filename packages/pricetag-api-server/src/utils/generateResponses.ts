import { APIGatewayProxyResult } from 'aws-lambda';

// ---- OK (200) ----
export function ok(
  dataKey: string,
  data: any,
  before?: any,
): APIGatewayProxyResult {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    body: JSON.stringify({
      ok: true,
      [dataKey]: data,
      before,
    }),
  };
}

// ---- Bad Request (400) ----
export enum BadRequestMessage {
  InvalidParams = 400100,
  InvalidJsonRequestBody = 400101,
  InvalidPathParams = 400102,
  InvalidQueryParams = 400103,
  InvalidBodyParams = 400104,
  ResourceNotFound = 400200,
  ResourceAlreadyExists = 400201,
  UnAuthorized = 400300,
}
export const badRequest = (
  message: keyof typeof BadRequestMessage,
  details?: object,
) => {
  const bodyObject = {
    ok: false,
    code: BadRequestMessage[message],
    message,
    details,
  };
  const errorResponse = {
    statusCode: 400,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(bodyObject),
  };
  console.log({ ...errorResponse, body: bodyObject });
  return errorResponse;
};

// ---- Internal Server Error (500) ----
export enum InternalServerErrorMessage {
  UnexpectedException = 500000,
}
export const internalError = (
  message: keyof typeof InternalServerErrorMessage,
  details?: object,
) => {
  const bodyObject = {
    ok: false,
    code: InternalServerErrorMessage[message],
    message,
    details,
  };
  const errorResponse = {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(bodyObject),
  };
  console.log({ ...errorResponse, body: bodyObject });
  return errorResponse;
};
