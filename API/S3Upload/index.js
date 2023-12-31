// Libraries
import express from "express";
import multer from "multer";

// Utilities
import { s3Upload } from "../../Utils/s3.js";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* 
    Route:          /
    Description:    Upload book to S3 Bucket
    Params:         none
    Access:         Public
    Method :        POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // s3 bucket options
        const bucketOptions = {
            Bucket: "students-hub",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", // Access Control List
        };

        const uploadBook = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadBook });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;