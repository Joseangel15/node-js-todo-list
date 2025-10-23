Node.js To-Do List Application

📝 Project Overview

This is a simple, full-stack To-Do List application built using Node.js and Express. It utilizes EJS for templating and MongoDB (via Mongoose) for persistent data storage.

The application allows users to view, add, and delete items from their To-Do list, demonstrating core principles of server-side rendering and asynchronous database communication.

✨ Features

View To-Do Items: Fetches and displays all items from the MongoDB database. (Handled by the GET /todo route).

Add New Items: Accepts new items via a form submission and saves them to MongoDB. (Handled by the POST /todo route).

Delete Items: Removes existing items from the database via an HTTP DELETE request. (Handled by the DELETE /todo/:item route).

Mongoose Promise-Based Syntax: Implements modern asynchronous handling using Promises (.then() and .catch()).

🛠️ Technologies Used

Technology

Purpose

Node.js

JavaScript runtime environment.

Express

Web application framework for routing and middleware.

EJS

Embedded JavaScript templating engine for the frontend views.

Mongoose

MongoDB object modeling for Node.js.

body-parser

Middleware to parse incoming request bodies (assumed for urlencodedParser).

⚙️ Setup and Installation

Prerequisites

You must have the following installed on your system:

Node.js & npm (or yarn)

MongoDB (running locally or a connection string to a cloud instance like MongoDB Atlas)

Installation Steps

Clone the repository:

git clone [Your Repository URL]
cd [your-project-directory]


Install dependencies:

npm install
# or yarn install


Configure Environment:
Create a file named .env in the project root and add your MongoDB connection string:

MONGODB_URI=mongodb://localhost:27017/[your_database_name]


(Note: You'll need to install and configure a package like dotenv in your main server file to load this variable.)

Start the application:

node app.js 
# or use nodemon for development: npm install -g nodemon && nodemon app.js


Access the App:
The application will typically run on http://localhost:3000 (or the port defined in your main server file).# node-js-todo-list
