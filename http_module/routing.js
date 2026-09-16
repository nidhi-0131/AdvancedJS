import http from 'http';
import fs from "fs";

const homePage = fs.readFileSync("home.html", "utf-8");
const server = http.createServer((req, res) => {
    // console.log('Hello World!');
    // console.log(req.url);
    // res.end("Hello from Server")
    if(req.url === "/") {
        res.end(homePage.replace("{{%CONTENT%}}", "Hello from Home Page"))
    } else if (req.url === "/about") {
        res.end("Hello from About Page")
    } else if (req.url === "/contact") {
        res.end("Hello from Contact Page")
    } else {
        res.end("404 Page Not Found")
    }
})

server.listen(3001, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:3001/");
})