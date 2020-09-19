const express = require("express");
const server = express();
const cors = require("cors");
const { homeGifs, searchGifs } = require("./modules/middlewares/responses");

// find other way to allows cors during dev
if (process.env.MODE === "dev")
  server.use(cors({ origin: "*" }));

// to be explored
// server.use(express.json())
// server.use(express.urlencoded({ extended: true }))

server.get("/api/", homeGifs);

server.get("/api/search", searchGifs);

module.exports = server;
