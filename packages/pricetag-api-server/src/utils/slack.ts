import { IncomingWebhook } from '@slack/webhook';

// Read a url from the environment variables
const url = process.env.SLACK_WEBHOOK_URL;

// Initialize
export const slack = new IncomingWebhook(url);
