const Songs = require("./Songs.js");

module.exports = {
    Query: {
      getSong: async (_, { id }, {dataSources}) =>
        dataSources.Songs.getSong(id),
      getSongs: async (_, { },{dataSources}) =>
        dataSources.Songs.getSongs(),
    },
    Mutation: { 
      createSong: async(_, { title, artist }, {dataSources}) =>
        dataSources.Songs.createSong({title, artist}),
      updateSong: async(_, { id, title, artist }, {dataSources}) => 
        dataSources.Songs.updateSong(id, {title, artist}),
      deleteSong: async(_, { id }, {dataSources}) =>
        dataSources.Songs.deleteSong(id), 
    }
  };