const ImageService = require('../services/impl/ImageService');

const imageService = new ImageService();

module.exports = {

  getImages: async (req, res, next) => {

    try {

      const captures = await imageService.fetchImages();
      res.render('images', { title: 'Browse Images', captures});

    } catch (err) {

      next(err);

    }

  }

};

