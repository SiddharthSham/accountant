const fromDB = (fastify, req, reply, query, vars = []) => {
  return fastify.pg.connect((err, client, release) => {
    if (err) {
      console.log(err);
      return reply.send(err);
    }

    client.query(query, vars, (err, result) => {
      release();
      reply.send(err || result);
    });
  });
};

module.exports = fromDB;
