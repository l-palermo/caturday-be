const { get } = require('axios').default;
const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');

const { auth }  = require('./auth');

jest.mock('axios');
jest.mock('jsonwebtoken');
jest.mock('jwk-to-pem');

describe('JWT AWS', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should verify the cognito jwt token and call the next middleware', async () => {
    jwt.decode.mockImplementation(() => ({ header: { kid: 'key' }}));
    jwt.verify.mockImplementation(() => {});
    jwkToPem.mockImplementation(() => {});
    get.mockImplementation(() => (Promise.resolve({
      data: { keys: [{kid: 'key'}]}
    })));

    const req = { headers: { authorization: 'a token'}};
    const res = {};
    const next = jest.fn();

    await auth(req, res, next);

    expect(jwt.decode).toHaveBeenCalled();
    expect(get).toHaveBeenCalled();
    expect(jwkToPem).toHaveBeenCalled();
    expect(jwt.verify).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
  it('should respond with an error if the key is invalid', async () => {
    jwt.decode.mockImplementation(() => ({ header: { kid: 'key' }}));
    jwt.verify.mockImplementation(() => {});
    jwkToPem.mockImplementation(() => {throw { stack: 'test'};});
    get.mockImplementation(() => (Promise.resolve({
      data: { keys: [{kid: 'different key'}]}
    })));

    const req = { headers: { authorization: 'a test'}, id: 'test'};
    const res = { status: (stValue) => ({ json: (payload) =>  ({ status: stValue, json: payload})})};
    const next = {};

    return expect(auth(req, res, next)).resolves.toEqual( 
      {'json': {message: 'There might be a problem with the authentication header', error: 'test'}, 'status': 403}
    );
  });
});