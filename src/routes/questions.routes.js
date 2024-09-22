import {Router} from "express"
import QuestionController from "../controllers/questions.controller.js"

const router = Router()

router.post('/', QuestionController.storeQuestion)

export default router