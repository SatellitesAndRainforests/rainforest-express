const axios = require('axios');
const JavaApiClient = require('../../infrastructure/apiclients/JavaApiClient');
const { CAPTURES_FIND_EVERY } = require('../../constants/apiEndpoints');
const ApiClientError = require('../../exceptions/ApiClientError');
const { testCapturesJson } = require('../testData/testCapturesJson');
const { testCaptures } = require('../testData/testCaptures');

jest.mock('axios'); // Auto-mock axios

describe('JavaApiClient', () => {


  it('should fetch images correctly', async () => {

    axios.get.mockResolvedValue({ data: testCapturesJson });

    const client = new JavaApiClient();
    const result = await client.getImages();

    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(CAPTURES_FIND_EVERY));
    expect(result).toEqual(testCaptures);

  });


  it('should handle errors when fetching images', async () => {

    axios.get.mockRejectedValue(new Error('Network error'));

    const client = new JavaApiClient();
    await expect(client.getImages()).rejects.toThrow(ApiClientError);
    await expect(client.getImages()).rejects.toThrow('Failed to fetch images: Network error');

  });


});

