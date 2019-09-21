const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const {MONGO_DB_URI, PORT} = require('./config/keys');

const app = express();

const todosRouter = require('./routes/todos.route');

// Middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

// Main routes
app.use('/api/todos', todosRouter);

// Error handling
app.use((err, req, res, next) => {
  const {statusCode = 500, message, error} = err;
  return res.status(statusCode).json({message, error});
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(MONGO_DB_URI, {useNewUrlParser: true})
  .then(() => {
    app.listen(PORT);
    console.log(`Server is running on port ${PORT}`);
  })
  .catch(error => {
    console.log('Connection error', error);
  });
