
class ImageServiceInterface {

  async fetchImages() {
    throw new Error('fetchImages() must be implemented');
  }

}

module.exports = ImageServiceInterface;

