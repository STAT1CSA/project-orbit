const express = require('express');
const { MongoClient } = require('mongodb');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const verifyRouter = require('./routes/verify');
const { spawn } = require('child_process');

const app = express();
const port = process.env.PORT || 3000;

// Create a connection to the database
const uri = 'mongodb+srv://private-db-mongodb-nyc3-43802-693e0aad.mongo.ondigitalocean.com';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Handle server shutdown
// Handle server shutdown

// Handle process signals


// Routes and middleware
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/verify', verifyRouter);