const ImageService = require('../../services/impl/ImageService');
const JavaApiClient = require('../../infrastructure/apiclients/JavaApiClient');
const ApiClientError = require('../../exceptions/ApiClientError');
const { testCaptures } = require('../testData/testCaptures');

jest.mock('../../infrastructure/apiclients/JavaApiClient'); // Auto-mock

describe('ImageService', () => {

  let service;
  let mockApiClient;

  beforeEach(() => {

    mockApiClient = new JavaApiClient();
    service = new ImageService();
    service.apiClient = mockApiClient; 

  });


  it('should fetch images successfully', async () => {

    mockApiClient.getImages.mockResolvedValue(testCaptures);

    const result = await service.fetchImages();

    expect(mockApiClient.getImages).toHaveBeenCalled();
    expect(result).toEqual(testCaptures);

  });


  it('should throw an error when fetching images fails', async () => {
    
    mockApiClient.getImages.mockRejectedValue(new ApiClientError('Failed to fetch images: Network error'));

    await expect(service.fetchImages()).rejects.toThrow(ApiClientError);
    await expect(service.fetchImages()).rejects.toThrow('Failed to fetch images: Network error');

  });


});

