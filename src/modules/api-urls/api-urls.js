module.exports = {
  buildGfyTrendingUrl: (tagName, count) => 
    `https://api.gfycat.com/v1/reactions/populated?tagName=${tagName}&gfyCount=${count}&cursor`,
  buildGfySearchUrl: (searchText, count) => `https://api.gfycat.com/v1/gfycats/search?search_text=${searchText}&count=${count}`,
};
