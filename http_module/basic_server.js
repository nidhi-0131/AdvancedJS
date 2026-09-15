import http from 'http';
import { readFileSync } from 'node:fs';

// creating a basic server using http module

const data = readFileSync("index.html", "utf-8");
const server = http.createServer((req, res) => {
    console.log("Hello World!");
    const order = {
        orderId: 10987,
        des: "Delhi",
        source: "Ghaziabad",
        username: "John Doe"
    }
   // res.statusCode = 200;
   // res.setHeader('Content-Type', 'application/json');
    console.log(`${data}`);
    res.writeHead(200, {
        "Content-Type": "text/html", "custom-header": "Hello ECE"
    }); // only in single thing instead of above two separately
    res.end(data);
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server is running ...");
})

// readFile("index.html", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log(data);
//     }
// })