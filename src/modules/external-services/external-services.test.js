const { getGifyHome, getGifySearch } = require('./external-services');
const axios = require('axios').default;

jest.mock('axios');

const gifs = [
  {
    max2mbGif: 'https://test.gif',
    title: 'test',
    webpUrl: 'https://test.webp',
    gfyId: 'testId',
  },
];

describe('External services', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the fetched gifycats gifs for the home page', async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve(
        { data: {gfycats: gifs }}
      );

    });

    const fetchedGifs = await getGifyHome('test', '1');

    expect(fetchedGifs).toEqual(gifs);
  });
  it('should return the fetched gify gifs for the search page', async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        data: { gfycats: gifs }});

    });
    const fetchedGifs = await getGifySearch('test-new', '7');

    expect(fetchedGifs).toEqual(gifs);
  });
  // it('should catch the error correctly', async () => {
  //   axios.get.mockImplementation(() => {
  //     return Promise.reject('API is down');
  //   });

  //   expect(await getGifySearch('test-new', '7')).toEqual('API is down');
  // });
});
