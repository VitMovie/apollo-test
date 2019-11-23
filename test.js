const { ApolloServer, gql } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { query, mutate } = createTestClient(server);

// test("create song", async () => {
//     const CREATE_SONG = gql`
//     mutation {
//         createSong(title: "test", artist: "test") {
//           title
//           artist
//         }
//     }
//   `;

//   const kek = await mutate({ mutation: CREATE_SONG });
//   console.log(kek)

//   const {
//       data: {createSong}
//   } = await mutate({ mutation: CREATE_SONG });

//   expect(createSong).toEqual({ title: "test", artist: "test" });
// })

test("get song", async () => {
  const GET_SONG = gql`
    query {
      getSong(id: "1") {
          title
      }
    }
  `;

  const {
    data: { getSong }
  } = await query({ query: GET_SONG });

  expect(getSong).not.toBeNull();
});