const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const router = require("./src/router");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(morgan("dev")); // logging middleware
app.use(cookieParser("mySecretCookie"));
// TODO: multer implementieren für image upload
// TODO: validierung einbinden
// TODO: Layered architecture umsetzen -----------> pending
// TODO: error handling implementieren -----------> pending

// read blog content
app.use("/api/data", router.postsDataRouter);

// read user data
app.use("/api/userData", router.userDataRouter);

const runServer = app.listen(PORT, () =>
    console.log("Server is running at port: ", PORT)
);

// createDataDB("./posts.json");

const connectionToDatabase = async () => {
    try {
        const uri = process.env.URI;
        console.log("Starting server...");
        await mongoose.connect(uri, { dbName: "BlogPost" });
        console.log("Connecting to database...");
        console.log("Database connection successful!");
    } catch (error) {
        console.log(error);
    }
};

connectionToDatabase()
    .then(runServer)
    .catch((err) => console.log(err));
