# Learning Koa

## Overview
This project is all about hands-on learning. We're following a [tutorial series] (https://dev.to/kachiic/koa-js-part-2-connect-a-sql-database-to-your-server-4mhl) to build a Koa JS server. The goal is simple: connect our Koa server to a PostgreSQL database using Sequelize.

This project uses the  tutorial series from this  focused on building a Koa JS server. The primary goal of this section is to establish a connection between the Koa server and a PostgreSQL database using Sequelize.

## Project Structure

 - **index.js:** Main entry point of the Koa application.
 - **event.model.js:** Model definition for the Event entity.
 - **event.controller.js:** Controller logic for handling events.


## Routes Documentation

### GET /events_list

- **Description:** Retrieve a list of all events.
- **Controller:** getEvents

### POST /post_event

- **Description:** Add a new event.
- **Controller:** addEvent