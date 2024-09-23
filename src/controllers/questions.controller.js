import Question from "../models/Questions.js"

class QuestionController {

    static async storeQuestion(q, r) {
        try {
            const { type, question, answer, points, level } = q.body

            if (!type || !question || !answer || !points || !level) {
                return r.status(400).json({ message: 'Datos incompletos' })
            }

            const newQuestion = await Question.create({
                type, question, answer, points, level
            })

            r.status(201).json({ message: 'Pregunta creada correctamente', data: newQuestion })
        } catch (error) {
            r.status(500).json({ message: error.message })
        }
    }
    static async getQuestions(req, res) {
        try {
            const questions = await Question.find()
            console.log(questions)
            res.json({ data: questions })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default QuestionController
