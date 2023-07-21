// importing env variables
import dotenv from "dotenv"
dotenv.config()
// require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import path from "path"
import { fileURLToPath } from 'url';

// import configs
import googleAuthConfig from "./config/google.config.js";
import routeConfig from "./config/route.config.js";

// microservice routes
import Auth from "./API/Auth/index.js";
import Books from "./API/Books/index.js";
import Forum from "./API/Forum/index.js";
import Reply from "./API/ForumReply/index.js";
import Review from "./API/Review/index.js";
import Upload from "./API/S3Upload/index.js";
import Teachers from "./API/Teachers/index.js";
import Quespaper from "./API/Quespaper/index.js";
import User from "./API/User/index.js";

// Database Connection
// import ConnectDB from "./database/connection.js";
import ConnectDB from "../client/build/index.html";

const studenthub = express();

// application middlewares
studenthub.use(express.json());
studenthub.use(express.urlencoded({ extended: false }));
studenthub.use(helmet());
studenthub.use(cors());
// studenthub.use(express.session());
// studenthub.use(passport.initialize());
// studenthub.use(passport.session());

// passport config
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
studenthub.use("/api/auth", Auth);
studenthub.use("/api/user", User);
studenthub.use("/api/books", Books);
studenthub.use("/api/forum", Forum);
studenthub.use("/api/reply", Reply);
studenthub.use("/api/reviews", Review);
studenthub.use("/api/upload", Upload);
studenthub.use("/api/teachers", Teachers);
studenthub.use("/api/quespaper", Quespaper);

// studenthub.get("/", (req, res) => res.json({ message: "Setup Success!" }));

// static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

studenthub.use(express.static(path.join(__dirname, '../client/build')))

studenthub.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

studenthub.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);