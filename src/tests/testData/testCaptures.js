const Capture = require('../../models/Capture');
const Image = require('../../models/Image');

const testCaptures = [

  new Capture({
    id: 1,
    species: 'test',
    idStatus: 'unidentified',
    longitude: 0,
    latitude: 0,
    images: [
      new Image({ id: 1, capture_id: 1, fileURL: 'test.jpg' })
    ]
  })
];

module.exports = { testCaptures };

