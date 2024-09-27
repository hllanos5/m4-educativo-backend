import Exams from '../models/Exams.js';
class ExamController {
    static async getExams(req, res) {
        try {
            const questions = await Exams.find()
            res.json({ data: questions })
        } catch (error) { res.status(500).json({ message: error.message }) }
    }
    static async getExamsId(req, res) {
        try {
            const question = await Exams.findById(req.params.id);
            if (!question) return res.status(404).json({ message: 'examen no encontrado' });
            res.json({ data: question });
        } catch (error) { res.status(500).json({ message: error.message }); }
    }

    static async getExamsByCourse(req, res) {
        try {
            const aExamen = await Exams.find({ courses: req.params.id }).populate('courses').populate('question');
            
            if (!aExamen) return res.status(404).json({ message: 'examen no encontrado' });
            res.json({ data: aExamen });
        } catch (error) { res.status(500).json({ message: error.message }); }
    }
}

export default ExamController
