// Libraries
import express from "express";
import passport from "passport";

// Database Model
import { ForumReplyModel } from "../../database/allModels.js";

const Router = express.Router();

/* 
    Route:          /:_id
    Description:    Get reply based on question id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:quesid", async (req, res) => {
    try {
        const reply = await ForumReplyModel.find({ question: req.params.quesid });

        return res.json({ reply });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /new
    Description:    POST reply
    Params:         none
    Access:         Public
    Method :        POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;

        const { replyData } = req.body;

        await ForumReplyModel.create({ ...replyData, user: _id });

        return res.json({ reply: "Sucessfully posted" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;