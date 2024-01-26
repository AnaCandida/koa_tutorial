const sequelize = require('.');
const { DataTypes } = require('sequelize');

/**
 * Represents the Event model in the database.
 * @typedef {Object} Event
 * @property {string} name - The name of the event.
 * @property {boolean} adultsOnly - Indicates if the event is for adults only.
 * @property {number} attendees - The number of attendees.
 * @property {string} description - A description of the event.
 */

/**
 * Sequelize model definition for the Event model.
 * @type {import('sequelize').ModelDefined<Event>}
 */
const Event = sequelize.define('Event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adultsOnly: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  attendees: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Synchronize the model with the database.
Event.sync();

module.exports = Event;
