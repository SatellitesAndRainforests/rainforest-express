const Capture = require('../../models/Capture');
const axios = require('axios');
const { javaBackendApiUrl } = require('../../config');
const { CAPTURES_FIND_EVERY } = require('../../constants/apiEndpoints');
const ApiClientError = require('../../exceptions/ApiClientError');

class JavaApiClient {

  async getImages() {

    try {

      const response = await axios.get(`${javaBackendApiUrl}${CAPTURES_FIND_EVERY}`);
      console.log(response.data);
      const captures = response.data.map(captureData => new Capture(captureData)); // MANUAL mapping
      return captures;

    } catch (error) {
      throw new ApiClientError(`Failed to fetch images: ${error.message}`);
    }

  }

}

module.exports = JavaApiClient;

