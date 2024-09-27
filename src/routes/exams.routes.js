import { Router } from 'express'
import ExamController from '../controllers/ExamController.js'
const router = Router()
router.get('/', ExamController.getExams)
router.get('/:id', ExamController.getExamsId)
router.get('/course/:id', ExamController.getExamsByCourse)
export default router
