import Exams from '../models/Exams.js';
import Course from '../models/Course.js';

class ExamController {
    static async getExams(req, res) {
        try {
            const questions = await Exams.find()
            res.json({ data: questions })
        } catch (error) { res.status(500).json({ message: error.message }) }
    }
    static async getExamsId(req, res) {
        try {
            const question = await Exams.findById(req.params.id).populate('questions', '-answer');
            if (!question) return res.status(404).json({ message: 'examen no encontrado' });
            res.json({ data: question });
        } catch (error) { res.status(500).json({ message: error.message }); }
    }

    static async getExamsByCourse(req, res) {
        try {
            const { id } = req.params

            const curso = await Course.findById(id)
            if (!curso) return res.status(404).json({ message: 'Curso no encontrado' })

            console.log(curso);
            

            const examenes = await Exams.find({ courses: id })
            res.json(examenes)

        } catch (error) { res.status(500).json({ message: error.message }); }
    }
}

export default ExamController
