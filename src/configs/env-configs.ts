import * as dotenv from 'dotenv';
dotenv.config();

export const getRestClientPort = (): string => {
  return process.env.REST_SERVER_PORT ?? '3000';
};

export const getAppEnvironment = (): string => {
  return process.env.APP_ENVIRONMENT ?? 'development';
};