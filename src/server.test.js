const supertest = require('supertest');

const server = require('./server');
const api = require('./modules/routers/api/api');

jest.mock('./modules/routers/api/api');

describe('Server', () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  it('should call the search route "/api" and return a 200 response', async () => {
    api.mockImplementation(async (req, res) => res.status(200).json('test'));

    const response = await supertest(server).get('/api');

    expect(api).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(response.body).toBe('test');
  });
});
