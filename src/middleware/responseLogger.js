module.exports = (req, res, next) => {

  const start = Date.now();

  res.on('finish', () => {
  
    const duration = Date.now() - start;
    console.log(`[ response ] \t ${req.method} ${req.originalUrl} \t  ${duration}ms, status code: ${res.statusCode} `);

  });

  next();

};
