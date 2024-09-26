import {Router} from "express"
import QuestionController from "../controllers/QuestionController.js"

const router = Router()

router.post('/', QuestionController.storeQuestion)
router.get('/', QuestionController.getQuestions)
router.get('/:id', QuestionController.getQuestionsId)
export default router