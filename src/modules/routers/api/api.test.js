const supertest = require('supertest');
const router = require('./api');
const express = require('express');

const { homeGifs, searchGifs } = require('../../middlewares/responses/responses');
const { auth } = require('../../middlewares/auth/auth');

jest.mock('../../middlewares/auth/auth');
jest.mock('../../middlewares/responses/responses');

describe('Api router', () => {
  const server = express();

  beforeEach(() => {
    server.use(router);
    jest.clearAllMocks();
  });

  it('should call the jwtCaturday middleware before calling to "/" route', async () => {
    // why I need to send something with the response otherwise keep pending?
    auth.mockImplementation((req, res) => res.status(400).json([]));

    const response = await supertest(server).get('/');

    expect(auth).toHaveBeenCalled();
    expect(homeGifs).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
  });
  it('should call the jwtCaturday middleware before calling to "/search" route', async () => {
    // why I need to send something with the response otherwise keep pending?
    auth.mockImplementation((req, res) => res.status(400).json([]));

    const response = await supertest(server).get('/search');

    expect(auth).toHaveBeenCalled();
    expect(searchGifs).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
  });
  it('should call the route "/", call the homeGifs function and return a 200 response', async () => {
    auth.mockImplementation((req, res, next) => next());
    homeGifs.mockImplementation(async (req, res) => res.status(200).json([]));

    const response = await supertest(server).get('/');

    expect(homeGifs).toHaveBeenCalled();
    expect(response.status).toBe(200);
  });
  it('should call the search route "/api/Search", call the searchGifs function and return a 200 response', async () => {
    auth.mockImplementation((req, res, next) => next());
    searchGifs.mockImplementation(async (req, res) => res.status(200).json([]));

    const response = await supertest(server).get('/search');

    expect(auth).toHaveBeenCalled();
    expect(response.status).toBe(200);
  });
});
