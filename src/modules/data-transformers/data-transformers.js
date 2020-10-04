module.exports = {
  gfyCatDataTransformer: function gfyCatDataTransformer(data) {
    return data
      .map(({ webpUrl, gfyId, title, max2mbGif }) => {
        if (webpUrl && gfyId && max2mbGif) {
          return {
            copyUrl: max2mbGif,
            gifUrl: webpUrl,
            gifName: title,
            id: gfyId,
            title: title,
          };
        }
      })
      .filter((object) => object);
  },
};
