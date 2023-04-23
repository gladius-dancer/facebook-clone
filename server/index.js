const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
port = process.env.PORT | 3000;
const connectDB = require('./configs/db');
connectDB();

let corsOption = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOption));

const path = require("path");
app.get("/*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../client/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})