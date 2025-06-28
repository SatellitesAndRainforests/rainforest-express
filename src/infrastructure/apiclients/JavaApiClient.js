const Capture = require('../../models/Capture');
const Image = require('../../models/Image');
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

      console.log();
      console.log('   failed - to fetch from the server - returning local data');
      console.log();
      
      return [
        new Capture( {
          id: 1,
          species: 'test species',
          idStatus: 'test status',
          longitude: 0,
          latitude: 9,
          images: [
            new Image( { id: 1, capture_id: 1, fileURL: '../test.ico' })
          ]
        }),
        new Capture( {
          id: 2,
          species: 'test species a',
          idStatus: 'test status a',
          longitude: 1,
          latitude: 10,
          images: [
            new Image( { id: 1, capture_id: 2, fileURL: 'test.ico' })
          ]
        })
      ];

      // throw new ApiClientError(`Failed to fetch images: ${error.message}`);
    }

  }

}

module.exports = JavaApiClient;

