import { Schema, model, Types } from 'mongoose'
import Question from './Questions.js'
import Course from './Course.js'

const examSchema = new Schema({
    courses: { 
        type: Types.ObjectId, 
        required: true, 
        ref: Course
    },
    questions: [{
        type: Types.ObjectId,
        required: true,
        ref: Question
    }],
    maxScore: { 
        type: Number, 
        required: true
    },
    time: { 
        type: Number,
        required: true,
        min: 15,
        max: 300 
    },
    name: { 
        type: String,
        enum: ['Elementary', 'A1', 'A2', 'B1', 'B2', 'C1'],
    required: true 
    },
}, { timestamps: true })

const Exams = model('Exams', examSchema)

export default Exams