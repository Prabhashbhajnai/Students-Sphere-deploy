import mongoose from "mongoose";

const QuesPaperSchema = new mongoose.Schema(
    {
        examType: { type: String, required: true },
        date: { type: String, required: true },
        location: { type: String, required: true },
        teacher: { type: mongoose.Types.ObjectId, ref: "Teacher" }
    }
);

export const QuesPaperModel = mongoose.model("QuesPaper", QuesPaperSchema);