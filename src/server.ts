import App from './app.js';
import { getRestClientPort } from './configs/env-configs.js';
const port = getRestClientPort();
const server = new App(port);
server.start();