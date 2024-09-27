import { Schema, model } from 'mongoose'

const questionSchema = new Schema({

  type: {
    type: String,
    enum: ['simple', 'multiple', 'video'],
    required: true 
  },
  question: { 
    type: String, 
    required: true 
  },
  answer: { 
    type: String, 
    required: true 
  },
  points: {
    type: Number, 
    required: true 
  },
  level: { 
    type: String, 
    enum: ['Elementary', 'A1', 'A2', 'B1', 'B2', 'C1'], 
    required: true 
  }

}, { timestamps: true })

const Question = model('Question', questionSchema)

export default Question
