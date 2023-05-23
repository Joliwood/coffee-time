const express = require("express");
const server = express();
const path = require("path");

server.use(express.static("public"));

server.get("/", (req, res, next) =>
  res.render(path.join(__dirname, "../index.html"))
);
