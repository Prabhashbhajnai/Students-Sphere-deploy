import mongoose from "mongoose";

const ForumSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "Users" },
        questionSubject: { type: String, required: true },
        questionText: { type: String },
        reply: [{ type: mongoose.Types.ObjectId, ref: "ForumReply" }]
    },
    {
        timestamps: true,
    }
);

export const ForumModel = mongoose.model("Forum", ForumSchema);