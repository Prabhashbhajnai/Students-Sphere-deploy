// importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
import path from "path"
import { fileURLToPath } from 'url';

// import configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Books from "./API/Books";
import Forum from "./API/Forum";
import Reply from "./API/ForumReply";
import Review from "./API/Review";
import Upload from "./API/S3Upload";
import Teachers from "./API/Teachers";
import Quespaper from "./API/Quespaper";
import User from "./API/User";

// Database Connection
import ConnectDB from "./database/connection";

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
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

studenthub.use(express.static(path.join(__dirname, './client/build')))

studenthub.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

studenthub.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);