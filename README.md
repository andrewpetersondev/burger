# burger

## Take a look

**[]()**

## Technologies Used

- HTML 5
- CSS 3
- JavaScript
- jQuery
- Node
- Express
- Handlebars
- Heroku
- MySQL

## Overview

The purpose of this project was ...

This is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## Criteria

## Bonuses

## Notes

## Status

In Progress.

## Sources

This project may have code from class activities, office hours notes, or from seeking help from TAs and teachers.

## Instructions

#### Config Setup

3. Create an `orm.js` file inside `config` directory.

   - In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     - `selectAll()`
     - `insertOne()`
     - `updateOne()`


#### Model setup

- Inside your `burger` directory, create a folder named `models`.

  - In `models`, make a `burger.js` file.

    - Inside `burger.js`, import `orm.js` into `burger.js`

    - Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    - Export at the end of the `burger.js` file.

#### Controller setup

1. Inside your `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, import the following:

   - Express
   - `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your `burger` directory, create a folder named `views`.

   - Create the `index.handlebars` file inside `views` directory.

   - Create the `layouts` directory inside `views` directory.

     - Create the `main.handlebars` file inside `layouts` directory.

     - Setup the `main.handlebars` file so it's able to be used by Handlebars.

     - Setup the `index.handlebars` to have the template that Handlebars can render onto.

     - Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│  
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
