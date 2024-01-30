[![Koa Version](https://img.shields.io/badge/Koa-2.15.0-2c7c31)](https://koajs.com/)
[![PostgreSQL Version](https://img.shields.io/badge/PostgreSQL-8.11.3-336791)](https://www.postgresql.org/)
[![Sequelize Version](https://img.shields.io/badge/Sequelize-6.35.2-52b0d0)](https://sequelize.org/)

# Learning Koa

## 

A simple Koa server tutorial with a PostgreSQL database and Sequelize ORM, following this [tutorial series] (https://dev.to/kachiic/koa-js-part-2-connect-a-sql-database-to-your-server-4mhl)


## Project Structure

 - **index.js:** Main entry point of the Koa application.
 - **event.model.js:** Model definition for the Event entity.
 - **event.controller.js:** Controller logic for handling events.


## Routes 

### GET /events_list

- **Description:** Retrieve a list of all events.
- **Controller:** getEvents

### POST /post_event

- **Description:** Add a new event.
- **Controller:** addEvent
