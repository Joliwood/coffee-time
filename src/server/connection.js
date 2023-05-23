const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DBConfigLink,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
