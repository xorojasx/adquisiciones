const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

/**
 * Import Routes
 */


/**
 * Configure BodyParser
 */
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

/**
 * Configure Statics Folders
 */
app.use(express.static("uploads"));

/**
 * COnfigure Header HTTP - CORS
 */
app.use(cors());

/**
 * Configure Routes
 */

/**
 * 
 */

module.exports = app;