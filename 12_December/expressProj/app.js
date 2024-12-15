const express = require("express");
const app = express();
const  PORT = 3000;

const userRoutes = require("./routes/userRoutes.js");

app.use("/users", userRoutes)

app.get("/hello", (req, res) => {
    res.send("worlds");
})
app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(PORT, () => {
    console.log("app is running at port 3000");
    
})

