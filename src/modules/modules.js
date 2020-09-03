const apiUrls = require("./api-urls/api-urls");
const axios = require("axios").default;

module.exports = {
  getHomeGifs: async function getHomeGifs(count) {
    const data = await axios
      .get(apiUrls.buildGfyTrendingUrl(count))
      .then((response) => response.data)
      .then((data) => data.gfycats)
      .catch((err) => console.log(err));
    return data;
  },

  searchGifyCat: async function searchGifyCat(name, count) {
    const data = await axios
      .get(apiUrls.buildGfySearchUrl(name, count))
      .then((response) => response.data)
      .then((data) => data.gfycats)
      .catch((err) => console.log(err));
    return data;
  },

  gfyCatDataParser: function gfyCatDataParser(data) {
    return data.map(({ webpUrl, gfyId, title, max2mbGif }) => {
      if (webpUrl && gfyId && max2mbGif) {
        return {
          copyUrl: max2mbGif,
          gifUrl: webpUrl,
          gifName: title,
          id: gfyId,
          title: title,
        };
      }
    });
  },
};
