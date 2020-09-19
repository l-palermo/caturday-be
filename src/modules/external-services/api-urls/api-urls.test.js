const { buildGfyHomeUrl, buildGfySearchUrl } = require('./api-urls');

describe('Api urls', () => {
    it('should return a url with the passed tagName and count', () => {
        const builtUrl = buildGfyHomeUrl('tagTest', '45');
        expect(builtUrl).toContain('?tagName=tagTest', '&gfyCount=45');
    });
    it('should return a url with the search text and the count', () => {
        const builtUrl = buildGfySearchUrl('test', '34');
        expect(builtUrl).toContain('?search_text=test', '&count=34');
    });
});