

// Importing necessary modules

const express = require('express');

const path = require('path');

// Creating Express application

const app = express();

const PORT = 8000;

// Defining a route that sends the HTML file

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    
    res.sendFile(indexPath);
});

// Serving static images and CSS

app.use('/img', express.static(__dirname + '/Public/Images'));

app.use('/styles', express.static(__dirname + '/Public/Styles'));

app.use('/scripts', express.static(__dirname + '/Scripts'));

// Starting server and listening on the specified port

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});