const imagesController = require('../../controllers/imagesController');
const ImageService = require('../../services/impl/ImageService');
const { TestCaptures } = require('../../tests/testData/testCaptures');


// Mock ImageService
jest.mock('../../services/impl/ImageService');


describe('imagesController', () => {


  let req, res, next;


  beforeEach(() => {

    req = {}; // we don't use any special data from req

    res = {
      render: jest.fn(),
    };

    next = jest.fn();

  });


  it('should render images view with captures', async () => {

    const testCaptures = TestCaptures;
    
    ImageService.prototype.fetchImages.mockResolvedValue(testCaptures);

    await imagesController.getImages(req, res, next);

    expect(res.render).toHaveBeenCalledWith('images', {
      title: 'Browse Images',
      captures: testCaptures,
    });

    expect(next).not.toHaveBeenCalled();

  });


  it('should call next with an error if fetchImages fails', async () => {

    const error = new Error('Failed to fetch');

    ImageService.prototype.fetchImages.mockRejectedValue(error);

    await imagesController.getImages(req, res, next);

    expect(next).toHaveBeenCalledWith(error);

    expect(res.render).not.toHaveBeenCalled();

  });


});

