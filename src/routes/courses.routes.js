import { Router } from 'express'
import CoursesController from '../controllers/CourseController.js'

const router = Router()
//Listar todos los cursos
router.get('/', CoursesController.getCourses)
export default router
