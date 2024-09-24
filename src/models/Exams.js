import mongoose from "mongoose";
const examSchema = new mongoose.Schema({
    courses: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Course' },
    question: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Question' },
    maxScore: { type: Number, required: true },
    time: { type: Number, required: true, min: 15, max: 300 },
    name: { type: String, enum: ['elementary', 'A1', 'A2'], required: true },
}, { timestamps: true })
const Exams = mongoose.model('Exams', examSchema)
export default Exams