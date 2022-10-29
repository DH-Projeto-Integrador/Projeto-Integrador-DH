function errorHandler (err, req, res, next) {
  console.error(err)
  res.status(500).json({Error: 'Ops, algo deu errado!'})
}

module.exports = errorHandler;