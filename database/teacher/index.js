import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        subject: { type: String, required: true },
        designation: { type: String },
        photo: { type: String },
        quesPaper: [{ type: mongoose.Types.ObjectId, ref: "QuesPaper" }]
    }
);

export const TeacherModel = mongoose.model("Teacher", TeacherSchema);