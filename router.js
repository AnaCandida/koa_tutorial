const Router = require("koa-router");

/**
 * Represents a Koa router instance.
 * @typedef {import('koa-router').default} Router
 */

/**
 * Koa router instance for handling event-related routes.
 * @type {Router}
 */
const router = new Router();

// Import controllers for handling route logic
const { getEvents, addEvent } = require("./controllers/events.controllers");

/**
 * Route to retrieve a list of all events.
 * @name GET /events_list
 * @function
 */
router.get("/events_list", getEvents);

/**
 * Route to add a new event.
 * @name POST /add_event
 * @function
 */
router.post("/add_event", addEvent);

module.exports = router;
