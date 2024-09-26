import Course from '../models/Course.js';
class CourseController {
    static async getCourses(req, res) {
        try {
            const aCourse = await Course.find()
            res.json({ data: aCourse })
        } catch (error) { res.status(500).json({ message: error.message }) }
    }

}

export default CourseController
