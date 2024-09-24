import Exams from '../models/Exams.js';
class ExamController {
    static async getExams(req, res) {
        try {
            const exams = await Exams.find()
            res.json({ data: exams })
        } catch (error) { res.status(500).json({ message: error.message }) }
    }
    static async getExamsId(req, res) {
        try {
            const exams = await Exams.findById(req.params.id);
            if (!exams) return res.status(404).json({ message: 'examen no encontrado' });
            res.json({ data: exams });
        } catch (error) { res.status(500).json({ message: error.message }); }
    }
}

export default ExamController
