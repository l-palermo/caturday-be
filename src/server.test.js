const supertest = require("supertest");
const server = require("./server");
const {
  homeGifs,
  searchGifs
  } = require("./modules/middlewares/responses");

jest.mock("./modules/middlewares/responses");

describe("Server", () => {
  it("should call the route '/api/' and return a 200 response if passed the correct params", async () => {
    homeGifs.mockImplementation(async (req, res) => res.json([]));
    const response = await supertest(server).get("/api/?tagName=test&count=2");

    expect(response.status).toBe(200);
  });
  it('should call the search route "/api/Search" and return a 200 response if passed the correct params', async () => {
    searchGifs.mockImplementation(async (req, res) => res.json([]));
    const response = await supertest(server).get("/api/search?searchText=test&count=2");

    expect(response.status).toBe(200);
  });
});
