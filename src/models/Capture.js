const Image = require('./Image');

class Capture {

  constructor({ id, species, idStatus, longitude, latitude, images }) {
    this.id = id;
    this.species = species;
    this.idStatus = idStatus;
    this.longitude = longitude;
    this.latitude = latitude;
    this.images = images.map(img => new Image(img)); // map to Image instances
  }

}

module.exports = Capture;

