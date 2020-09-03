const express = require("express");
const app = express();
const cors = require("cors");
const modules = require("./modules/modules");

if (process.env.MODE === "dev")
  app.use(cors({ origin: "http://localhost:3000" }));

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.get("/api/", async (req, res) => {
  const { tagName, count } = req.query;
  const data = await modules.getHomeGifs(tagName, count);
  const caturdayGifs = modules.gfyCatDataParser(data);

  res.json(caturdayGifs);
});

app.get("/api/search", async (req, res) => {
  const { searchText, count } = req.query;
  const data = await modules.searchGifyCat(searchText, count);
  const caturdayGifs = modules.gfyCatDataParser(data);

  res.json(caturdayGifs);
});

// the port which express will be listening to
// has to be the same as the one on the compose file
app.listen(4000);
