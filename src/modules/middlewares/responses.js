const {
  getGifyHome,
  getGifySearch,
} = require("../external-services/external-services");
const { gfyCatDataTransformer } = require("../data-transformers/data-transformers");

module.exports = {
  homeGifs: async function homeGifs(req, res) {
    const { tagName, count } = req.query;

    if (tagName && count) {
      try {
        const data = await getGifyHome(tagName, count);
        const caturdayGifs = gfyCatDataTransformer(data);
        return res.status(200).json(caturdayGifs);
      } catch (err) {
        // logger.log('err', 'external', {message: } )
        return res.status(503).json(err);
      }
    }
    res.json(new TypeError("The passed paramenters are invalid"))
  },
  searchGifs: async function searchgGifs(req, res) {
    const { searchText, count } = req.query;

    if (searchText && count) {
      try {
      const data = await getGifySearch(searchText, count);
      const caturdayGifs = gfyCatDataTransformer(data);
      return res.json(caturdayGifs);
      } catch (err) {
        return res.status(503).json(err);
      }
    }
    res.json(new TypeError("The passed paramenters are invalid"));
  },
};
