const jwt = require('jsonwebtoken');

const { jwtCaturdayIssuer, jwtCaturdayVerify } = require('./jwt-caturday');

jest.mock('jsonwebtoken');

describe('JWT Caturday', () => {
  describe('jwtCaturdayIssuer', () => {
    it('should sign a new jwt token', () => {
      jwt.sign.mockImplementation(() => 'token');

      const req = {};
      const res = { status: jest.fn((stValue) => ({ json: jest.fn((payload) =>  ({ status: stValue, body: payload}))}))};

      jwtCaturdayIssuer(req, res);
      
      expect(res.status).toHaveBeenCalledWith(200);
    });
    it('should respond with an error if the jwt signature fails', () => {
      jwt.sign.mockImplementation(() => { throw new TypeError('Signature failed');});

      const req = {};
      const res = { status: jest.fn((stValue) => ({ json: jest.fn((payload) =>  ({ status: stValue, body: payload}))}))};

      jwtCaturdayIssuer(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
    });
  });
  describe('jwtCaturdayVerify', () => {
    it('should verify the received token', () => {
      jwt.verify.mockImplementation(() => {});

      const req = { headers: { authorization: 'a token'}};
      const res = {};
      const next = jest.fn();

      jwtCaturdayVerify(req, res, next);

      expect(jwt.verify).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
    it('should respond with an error if the verification fails', () => {
      jwt.verify.mockImplementation(() => {throw new TypeError('Verification failed');});

      const req = { headers: { authorization: 'a token'}};
      const res = { status: jest.fn((stValue) => ({ json: jest.fn((payload) =>  ({ status: stValue, body: payload}))}))};
      const next = {};

      jwtCaturdayVerify(req, res, next);

      expect(jwt.verify).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(401);
    });
    
  });
});