const { RESTDataSource } = require("apollo-datasource-rest");

class Songs extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://0.0.0.0:8000/api/songs/";
  }

  async getSong(id) {
    const song = await this.get(`/${id}/`);
    return song;
  }

  async getSongs() {
    const songs = await this.get(``);
    return songs;
  }

  async createSong(song) {
    const new_song = await this.post(``, song);
    return new_song;
  }

  async updateSong(id, song) {
    const updated_song = await this.put(`/${id}/`, song)
    return updated_song
  }

  async deleteSong(id) {
    const song = await this.delete(`/${id}/`)
    return song
  }
}

module.exports = Songs;
