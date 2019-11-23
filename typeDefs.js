const { gql } = require("apollo-server");

module.exports = gql`
type Song {
  title: String
  artist: String
}

type Query {
  getSong(id: Int!): Song
  getSongs: [Song]
}

type Mutation {
  createSong(title: String!, artist: String): Song
  updateSong(id: Int!, title: String, artist: String): Song
  deleteSong(id: Int!): Song
}
`;