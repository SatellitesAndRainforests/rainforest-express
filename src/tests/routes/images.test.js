const request = require('supertest');
const app = require('../../app');
const { testCaptures } = require('../../tests/testData/testCaptures');

const ImageService = require('../../services/impl/ImageService');

jest.mock('../../services/impl/ImageService');

let fetchImagesMock;

beforeEach(() => {
  fetchImagesMock = jest.fn().mockResolvedValue([]);
  ImageService.mockImplementation(() => ({
    fetchImages: fetchImagesMock,
  }));
});

describe('GET /images', () => {

  it('should return 200 and render images page', async () => {
    const res = await request(app).get('/images');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Browse Images');
  });

/*
  it('should handle errors and return 500 if fetchImages fails', async () => {
    fetchImagesMock.mockRejectedValueOnce(new Error('Fetch failed')); 

    const res = await request(app).get('/images');
    expect(res.statusCode).toBe(500);
    expect(res.text).toContain('500 - Server error');
  });
*/

  it('should render captures when data is available', async () => {
    fetchImagesMock.mockResolvedValueOnce(testCaptures); 

    const res = await request(app).get('/images');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain(testCaptures[0].species);
  });

});

