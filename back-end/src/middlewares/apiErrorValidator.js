const express = require('express')
const app = express()

const errorHandler = (error, request, response, next) => {
  // Error handling middleware functionality
}

// route handlers
app.get()
app.post()

// attach error handling middleware functions after route handlers
app.use(errorHandler)