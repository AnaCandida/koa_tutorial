const sequelize = require('.')
const { DataTypes } = require('sequelize');

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

Event.sync();

module.exports = Event