const Event = require("../models/event.models.js");


const getEvents = async ctx => {
    try {
        const foundEvents = await Event.findAll();
        ctx.body = foundEvents;
        ctx.status = 200;
    } catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};
const addEvent = async ctx => {
    try {
        const { name, adultsOnly, attendees, description } = ctx.request.body;

        await Event.create({ name, adultsOnly, attendees, description });

        ctx.body = 'Event Created!'
        ctx.status = 201;
    } catch (err) {
        ctx.status = 500;
        throw (err)
    }
};

module.exports = {
  getEvents,
  addEvent,
};