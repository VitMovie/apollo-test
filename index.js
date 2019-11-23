const { ApolloServer, gql } = require("apollo-server");
const Songs = require("./Songs.js");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Songs: new Songs()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});