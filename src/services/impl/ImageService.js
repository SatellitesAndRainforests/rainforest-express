const JavaApiClient = require('../../infrastructure/apiclients/JavaApiClient');
const ImageServiceInterface = require('../interfaces/ImageServiceInterface');

class ImageService extends ImageServiceInterface {

  constructor() {
    super();
    this.apiClient = new JavaApiClient();
  }

  async fetchImages() {
    return await this.apiClient.getImages();
  }

}

module.exports = ImageService;

