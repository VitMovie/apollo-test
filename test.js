const { ApolloServer, gql } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const Songs = require("./Songs.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  dataSources: () => ({
    Songs: new Songs()
  })
});

const { query, mutate } = createTestClient(server);

test("create song", async () => {
   const CREATE_SONG = gql`
    mutation {
        createSong(title: "test", artist: "test") {
          title
          artist
        }
    }
  `;

  const {
      data: {createSong}
  } = await mutate({ mutation: CREATE_SONG });

  expect(createSong).toEqual({ title: "test", artist: "test" });
})

test("get song", async () => {
  const GET_SONG = gql`
    query {
        getSong(id: 1) {
          title
          artist
        }
    }
  `;

  const {
    data: {getSong}
  } = await query({ query: GET_SONG });

  expect(getSong).toEqual({ title: "test", artist: "test" });
});

test("get songs", async () => {
    const GET_SONGS = gql`
        query {
            getSongs {
            title
            }
        }
    `;

    const {
        data: {getSongs}
    } = await query({ query: GET_SONGS });

    expect(getSongs).not.toBeNull();
});

test("update song", async () => {
    const UPDATE_SONG = gql`
     mutation {
         updateSong(id: 1, title: "test1", artist: "test1") {
           title
           artist
         }
     }
   `;
 
   const {
       data: {updateSong}
   } = await mutate({ mutation: UPDATE_SONG });
 
   expect(updateSong).toEqual({ title: "test1", artist: "test1" });
 });

 test("delete song", async () => {
    const DELETE_SONG = gql`
     mutation {
         deleteSong(id: 1) {
           title
           artist
         }
     }
   `;
 
   const {
       data: {deleteSong}
   } = await mutate({ mutation: DELETE_SONG });
 
   expect(deleteSong).toEqual({ title: "null", artist: "null" });
 })