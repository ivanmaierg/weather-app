const express = require("express");
const app = express(); // create express app
const path = require("path");



// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 3000
app.listen(3000, () => {
    console.log("server started on port 3000");
});