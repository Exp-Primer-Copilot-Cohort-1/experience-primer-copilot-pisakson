// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = 3000;

// Create server
http.createServer((req, res) => {
    // Get the URL
    const urlPath = url.parse(req.url).pathname;
    const filePath = path.join(__dirname, urlPath);

    // Check if file exists
    fs.exists(filePath, (exists) => {
        if (exists) {
            // Read the file
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Server Error');
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
        } else {
            res.writeHead(404);
            res.end('File Not Found');
        }
    });
}).listen(port);

console.log(`Server running on port ${port}`);