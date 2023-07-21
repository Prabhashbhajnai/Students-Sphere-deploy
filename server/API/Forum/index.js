// Libraries
import express from "express";
import passport from "passport";

// Database Model
import { ForumModel } from "../../Database/allModels";

const Router = express.Router();

/* 
    Route:          /
    Description:    Get all the Questions
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/", async (req, res) => {
    try {
        const forum = await ForumModel.find();

        return res.json({ forum })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /:_id
    Description:    Get individual Question based on id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const question = await ForumModel.findById(_id);
        if (!question)
            return res.status(404).json({ error: "Question not found" });

        return res.json({ question });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /new
    Description:    POST new question
    Params:         none
    Access:         Public
    Method :        POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;

        const { questionData } = req.body;

        await ForumModel.create({ ...questionData, user: _id });

        return res.json({ question: "Sucessfully posted" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;