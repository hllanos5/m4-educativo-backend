import {Router} from "express"
import QuestionController from "../controllers/questions.controller.js"

const router = Router()

router.post('/', QuestionController.storeQuestion)
router.get('/:id', QuestionController.getQuestions)
export default router