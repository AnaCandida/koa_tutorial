const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");

const router = require("./router");

/**
 * Represents a Koa application.
 * @type {Koa}
 */
const App = new Koa();

/**
 * The port on which the server will listen.
 * @type {number}
 */
const port = 8000;

// Middleware setup
/**
 * Middleware for parsing the request body.
 * @type {Function}
 */
const bodyParserMiddleware = parser();

/**
 * Middleware for handling Cross-Origin Resource Sharing (CORS).
 * @type {Function}
 */
const corsMiddleware = cors();

// Apply middleware to the Koa application
App.use(bodyParserMiddleware)
  .use(corsMiddleware)
  .use(router.routes());

/**
 * Start the Koa server.
 * @param {number} port - The port to listen on.
 * @returns {void}
 */
const startServer = (port) => {
  App.listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });
};

// Start the server on the specified port
startServer(port);
