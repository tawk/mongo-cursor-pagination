const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

async function start() {
  const server = new MongoMemoryServer({
    binary: { version: '4.4.18' },
  });

  await server.start();

  return server;
}

async function db(mongod) {
  const uri = await mongod.getUri();
  const client = new MongoClient(uri);
  return (await client.connect()).db();
}

module.exports = {
  db,
  start,
};
