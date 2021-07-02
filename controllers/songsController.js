const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  res.json(allSongs);
});

module.exports = songs;
