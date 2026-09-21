import http from 'http';
import fs from 'fs';

const data = fs.readFileSync("config.json", "utf-8")
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (req.url == '/') {
        res.end("Home Page")
    } else if (req.url == "/config") {
        res.end(data)
    } else {
        res.end("Welcome from Server")
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:3000/")
})

// GET Method: we will use this method to get the data from the server
// POST Method: we will use this method to send the data to the server
// PUT Method: we will use this method to update the data on the server
// PATCH Method: we will use this method to partially update the data on the server
// DELETE Method: we will use this method to delete the data from the server