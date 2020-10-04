const supertest = require('supertest');
const router = require('./auth-verification');
const express = require('express');

const { cognitoPublicKeysVerify } = require('../../middlewares/auth/jwt-aws/jwt-aws');
const { jwtCaturdayIssuer } = require('../../middlewares/auth/jwt-caturday/jwt-caturday');

jest.mock('../../middlewares/auth/jwt-aws/jwt-aws');
jest.mock('../../middlewares/auth/jwt-caturday/jwt-caturday');

describe('Auth router', () => {
  const server = express();

  beforeEach(() => {
    server.use(router);
    jest.clearAllMocks();
  });

  it('should call the conglitoPublicKeysVerify middleware before calling the "/" route ', async () => {
    cognitoPublicKeysVerify.mockImplementation((req, res) => res.status(400).json([]));

    const response = await supertest(server).get('/');

    expect(cognitoPublicKeysVerify).toHaveBeenCalled();
    expect(jwtCaturdayIssuer).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
  });
  it('should call the route "/" and return a 200 response', async () => {
    cognitoPublicKeysVerify.mockImplementation((req, res, next) => next());
    jwtCaturdayIssuer.mockImplementation((req, res) => res.status(200).json([]));

    const response = await supertest(server).get('/');

    expect(jwtCaturdayIssuer).toHaveBeenCalled();
    expect(response.status).toBe(200);
  });
});