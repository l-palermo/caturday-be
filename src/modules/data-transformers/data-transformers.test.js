const { gfyCatDataTransformer } = require('./data-transformers');

describe('Data transformers', () => {
  describe('gfyCatDataTransformer', () => {
    it('should return an array of objects with customised keys and the correct values given the gfy data', () => {
      const gfyData = [
        {
          max2mbGif: 'https://test.gif',
          title: 'test',
          webpUrl: 'https://test.webp',
          gfyId: 'testId',
          otherProp: 'test',
          anotherProp: 'test',
        },
      ];

      const expectedData = [
        {
          copyUrl: 'https://test.gif',
          gifName: 'test',
          gifUrl: 'https://test.webp',
          id: 'testId',
          title: 'test',
        },
      ];

      const parsedObj = gfyCatDataTransformer(gfyData);
      expect(parsedObj).toEqual(expectedData);
    });
    it('should not insert the object in the array if one of the key value is null', () => {
      const gfyData = [
        {
          max2mbGif: 'https://test.gif',
          title: 'test',
          webpUrl: 'https://test.webp',
          gfyId: 'testId',
          otherProp: 'test',
          anotherProp: 'test',
        },
        {
          max2mbGif: '',
          title: 'test',
          webpUrl: 'https://test.webp',
          gfyId: 'testId',
          otherProp: 'test',
          anotherProp: 'test',
        },
      ];
      const parsedObj = gfyCatDataTransformer(gfyData);
      expect(parsedObj).toHaveLength(1);
    });
  });
});
