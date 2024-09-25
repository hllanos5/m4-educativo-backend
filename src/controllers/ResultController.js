import Video from '../models/Video.js'
import Question from '../models/Questions.js'
import Result from '../models/Result.js'

class ResultController {
  static async store (req, res) {
    try {
      const { userAnswers } = req.body
      const { filename } = req.file
      const arrayUserAnswers = JSON.parse(userAnswers)

      const video = await Video.create({
        exam: req.exam._id,
        user: req.user._id,
        video: filename
      })

      let score = 0
      const answersArr = []

      for (const a of arrayUserAnswers) {
        const question = await Question.findById(a.questionId)
        if (!question) continue

        if (question.type === 'video') {
          answersArr.push({ question: a.questionId, video: video._id })
        } else {
          answersArr.push({ question: a.questionId, answer: a.answer })
        }

        if (!question.answer) continue

        if (question.answer?.toLowerCase() === a.answer?.toLowerCase()) {
          score += question.points
        }
      }

      const result = await Result.create({
        exam: req.exam._id,
        user: req.user._id,
        answers: answersArr,
        points: score
      })

      res.json({ message: 'Resultado guardado', data: result })
      // res.json({ message: 'Resultado guardado' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
    }
  }
}

export default ResultController
