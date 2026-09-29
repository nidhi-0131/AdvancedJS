import express from "express";
import fs from "fs";

const app = express();
const book = fs.readFileSync("./data/books.json", "utf-8");
const count = fs.readFileSync("./data/books.json", "utf-8");

app.get("/api/v1/books", (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            count: bookData.length,
            data: {
                book: bookData
            }
        })
    } catch(error) {
        res.status(404).json({
            status: "fall",
            message: "data not found"
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running ...");
})