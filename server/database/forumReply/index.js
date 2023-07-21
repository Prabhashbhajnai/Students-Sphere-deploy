import mongoose from "mongoose";

const ForumReplySchema = new mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "Users" },
        question: { type: mongoose.Types.ObjectId, ref: "Forum" },
        replyText: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

export const ForumReplyModel = mongoose.model("ForumReply", ForumReplySchema);