import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({

  type: { type: String, enum: ['simple', 'multiple', 'video'], required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  points: { type: Number, required: true },
  level: { type: String, enum: ['elementary', 'A1', 'A2'], required: true }

}, { timestamps: true })

const Question = mongoose.model('Question', questionSchema)

export default Question
