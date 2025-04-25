module.exports = (req, res, next) => {
  const timestamp = new Date().toLocaleString();
  console.log(`[ request  ] \t ${req.method} ${req.originalUrl} \t  ${timestamp}`);
  next();
};
