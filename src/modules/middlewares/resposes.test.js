const { homeGifs, searchGifs } = require("./responses");
const {
  getGifyHome,
  getGifySearch,
} = require("../external-services/external-services");

jest.mock("../external-services/external-services");

describe("Responses", () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  describe("Home gifs", () => {
    it("should throw an error if passed the wrong params", async () => {
      getGifyHome.mockImplementation(() => []);

      const req = { query: { tagName: "", count: "" } };
      const res = { json: jest.fn() };

      return expect(homeGifs(req, res)).rejects.toThrow(
        new TypeError("The passed paramenters are invalid")
      );
    });
    it("should return the correct data when passed the correct params", () => {
      getGifyHome.mockImplementation(() => []);
      const req = { query: { tagName: "test", count: "test" } };
      const res = { json: jest.fn() };
      homeGifs(req, res);

      expect(getGifyHome).toHaveBeenCalled();
    });
  });
  describe("Search gifs", () => {
    it("should throw an error if passed the wrong params", async () => {
      getGifySearch.mockImplementation(() => []);

      const req = { query: { searchText: "", count: "" } };
      const res = { json: jest.fn() };

      return expect(searchGifs(req, res)).rejects.toThrow(
        new TypeError("The passed paramenters are invalid")
      );
    });
    it("should return the correct data when passed the correct params", () => {
      getGifySearch.mockImplementation(() => []);
      const req = { query: { searchText: "test", count: "test" } };
      const res = { json: jest.fn() };
      searchGifs(req, res);

      expect(getGifySearch).toHaveBeenCalled();
    });
  });
});
