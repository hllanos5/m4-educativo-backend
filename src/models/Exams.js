import mongoose from "mongoose";
const examSchema = new mongoose.Schema({
    courses: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Couses' },
    question: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Question' },
    maxScore: { type: Number, required: true },
    time: { type: Number, required: true, min: 15, max: 300 },
    name: { type: String, enum: ['Elementary', 'A1', 'A2', 'B1', 'B2', 'C1'], required: true },
}, { timestamps: true })
const Exams = mongoose.model('Exams', examSchema)
export default Exams