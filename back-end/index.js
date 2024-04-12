// backend/index.js
const express = require('express');
const cors = require("cors");
const mainRouter = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Hi, I am listening on port ${port} but I know god is not listening to you`)
});