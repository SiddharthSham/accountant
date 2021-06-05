const fromDB = require("../utils/db");

const ClientController = (fastify, req, reply) => {
  return fromDB(fastify, req, reply, "SELECT * FROM clients;");
};

module.exports = ClientController;
