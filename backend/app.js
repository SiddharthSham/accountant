const fastify = require("fastify")();
require("dotenv").config();

fastify.register(require("fastify-cors"));

fastify.register(require("fastify-postgres"), {
  connectionString: `postgres://postgres:${process.env.DBPASSWORD}@localhost/accountant`,
});

const ClientController = require("./controllers/clients");

fastify.get("/test", (req, reply) => {
  ClientController(fastify, req, reply);
});

fastify.listen(3001, (err) => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
