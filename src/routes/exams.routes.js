import { Router } from 'express'
import ExamController from '../controllers/ExamController.js'
const router = Router()
router.get('/', ExamController.getExams)
router.get('/:id', ExamController.getExamsId)
export default router
