import type { Middleware } from 'utils/applyMiddlewares';
import { internalError } from 'utils/generateResponses';
import { slack } from 'utils/slack';

// catch 'uncaughtException' or 'unhandledRejection' and return formatted error response
export const exceptionCatcher: Middleware =
  handler => async (event, context, callback: any) => {
    try {
      const response = await handler(event, context, callback);
      if (response.statusCode !== 200) {
        await slack.send(
          `에러가 발생했어요.  ${context.functionName}-${
            response.statusCode
          }\n\n\n에러 내용\n${JSON.parse(response.body)}`,
        );
      }
      return response;
    } catch (error) {
      await slack.send(`헐, 5xx 에러가 발생했어요.`);
      console.error(error); // for cloudwatch logging
      return internalError('UnexpectedException', { hint: error.message });
    }
  };
