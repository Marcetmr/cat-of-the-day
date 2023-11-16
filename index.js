

// Import necessary modules

const express = require('express');

const path = require('path');

// Create an Express application

const app = express();

const PORT = 8000;

// Define a route that sends the HTML file

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    
    res.sendFile(indexPath);
});

// Start server and listen on the specified port

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});