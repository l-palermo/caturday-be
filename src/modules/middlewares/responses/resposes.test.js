const { homeGifs, searchGifs } = require('./responses');
const { getGifyHome, getGifySearch } = require('../../external-services/external-services');
const { gfyCatDataTransformer } = require('../../data-transformers/data-transformers');

jest.mock('../../external-services/external-services');
jest.mock('../../data-transformers/data-transformers');

describe('Responses', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Home gifs', () => {
    it('should respond with an error if passed the wrong params', async () => {
      const req = { query: { tagName: '', count: '' } };
      const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, json: payload})})} ;

      const response = await homeGifs(req, res);

      expect(response.json).toEqual({error: new TypeError('The passed paramenters are invalid')});
    });
    it('should respond with the correct data when passed the correct params', async () => {
      getGifyHome.mockImplementation(() => []);
      gfyCatDataTransformer.mockImplementation(() => ({test: 'test'}));

      const req = { query: { tagName: 'test', count: 'test' } };
      const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, body: payload})})} ;

      const response = await homeGifs(req, res);

      expect(getGifyHome).toHaveBeenCalled();
      expect(gfyCatDataTransformer).toHaveBeenCalled();
      expect(response).toEqual({ status: 200, body: { test: 'test' } });
    });
    it('should catch the error if the imported modules fails', () => {
      getGifyHome.mockImplementation(() => Promise.reject(new TypeError('Error occured')));

      const req = { query: { tagName: 'test', count: 'test' } };
      const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, body: payload})})} ;

      return expect(homeGifs(req, res)).resolves.toEqual(
        {body: new TypeError('Error occured'), status: 503}
      );
    });
  });
  describe('Search gifs', () => {
    it('should respond with an error if passed the wrong params', async () => {
      const req = { query: { searchText: '', count: '' } };
      const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, body: payload})})} ;

      const response = await searchGifs(req, res);

      expect(response.body).toEqual({ error: new TypeError('The passed paramenters are invalid')});
      expect(response.status).toEqual(406);
    });
    it('should respond with the correct data when passed the correct params', async () => {
      getGifySearch.mockImplementation(() => []);
      gfyCatDataTransformer.mockImplementation(() => ({test: 'test'}));

      const req = { query: { searchText: 'test', count: 'test' } };
      const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, body: payload})})} ;


      const response = await searchGifs(req, res);

      expect(getGifySearch).toHaveBeenCalled();
      expect(gfyCatDataTransformer).toHaveBeenCalled();
      expect(response).toEqual({ status: 200, body: { test: 'test' } });
    });
    it('should catch the error if the imported modules fails', () => {
      getGifySearch.mockImplementation(() => Promise.reject(new TypeError('Error occured')));

      const req = { query: { searchText: 'test', count: 'test' } };
      const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, body: payload})})};

      return expect(searchGifs(req, res)).resolves.toEqual(
        {body: new TypeError('Error occured'), status: 503}
      );
    });
  });
});
