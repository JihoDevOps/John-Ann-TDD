const express = require('express');

const PORT = 5000;

// express
const app = express();


// DB Connection
const mongoose = require('mongoose');
const mongoDB = {
  url: 'mongodb+srv://test:test@test.z8jpn.mongodb.net/test?retryWrites=true&w=majority',
  connectOption: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
mongoose.connect(mongoDB.url, mongoDB.connectOption)
.then(() => console.log('success DB connection!'))
.catch(err => console.error(err));

// Routes
const productRoutes = require('./routes');
app.use(express.json()); // cf. Body Parser
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send("Hello World!")
});

// Error Handler
app.use((error, request, response, next) => {
  response.status(500).json({ message: error.message })
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);

module.exports = app;
