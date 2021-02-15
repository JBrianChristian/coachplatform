const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

require('./models/User')
require('./services/passport');
require('./routes/authRoutes')(app);


/* Get new mongoDB */
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });


const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});