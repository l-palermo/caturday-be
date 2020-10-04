const supertest = require('supertest');

const server = require('./server');
const authVerification = require('./modules/routers/auth-verification/auth-verification');
const api = require('./modules/routers/api/api');
const env = require('./env');

jest.mock('./modules/routers/auth-verification/auth-verification');
jest.mock('./modules/routers/api/api');

describe('Server', () => {
  afterEach(() => {
    jest.clearAllMocks;
  });

  it('should call the route "/auth/" and return a 200 response', async () => {
    authVerification.mockImplementation(async (req, res) => res.status(200).json('test'));

    const response = await supertest(server).get('/auth');

    expect(authVerification).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(response.body).toBe('test');
  });
  it('should call the search route "/api" and return a 200 response', async () => {
    api.mockImplementation(async (req, res) => res.status(200).json('test'));

    const response = await supertest(server).get('/api');

    expect(api).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(response.body).toBe('test');
  });
  it('should allow cors origin request when in development mode', async () => {
    jest.spyOn(env, 'isDevEnv').mockReturnValue(true);
    api.mockImplementation(async (req, res) => res.status(200).json('test'));

    const response = await supertest(server).get('/api');

    expect(response.header['access-control-allow-origin']).toBe('*');
  });
  it('should not allow cors origin request on a mode different from development', async () => {
    jest.spyOn(env, 'isDevEnv').mockReturnValue(false);
    api.mockImplementation(async (req, res) => res.status(200).json('test'));

    const response = await supertest(server).get('/api');

    expect(response).not.toContain('access-control-allow-origin');
  });
});
