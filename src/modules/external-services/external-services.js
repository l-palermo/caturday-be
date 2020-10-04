const { buildGfyHomeUrl, buildGfySearchUrl } = require('./api-urls/api-urls');
const { get } = require('axios').default;

module.exports = {
  getGifyHome: async function getGifyHome(tagName, count) {
    const {
      data: { gfycats },
    } = await get(buildGfyHomeUrl(tagName, count));
    return gfycats;
  },

  getGifySearch: async function getGifySearch(searchText, count) {
    const {
      data: { gfycats },
    } = await get(buildGfySearchUrl(searchText, count));
    return gfycats;
  },
};
