import {Router} from "express"
import QuestionController from "../controllers/QuestionController.js"

const router = Router()

router.post('/', QuestionController.storeQuestion)
router.get('/:id', QuestionController.getQuestions)
export default router