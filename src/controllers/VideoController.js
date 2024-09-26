import Video from "../models/Video.js";

class VideoController {
    static async getVideo(req, res) {
        try {
            const aVideo = await Video.find()
            res.json({ data: aVideo })
        } catch (error) { res.status(500).json({ message: error.message }) }
    }
    static async getVideoId(req, res) {
        try {
            const oVideo = await Video.findById(req.params.id);
            if (!oVideo) return res.status(404).json({ message: 'examen no encontrado' });
            res.json({ data: oVideo });
        } catch (error) { res.status(500).json({ message: error.message }); }
    }

    static async getVideoPorUserId(req, res) {
        try {
            const aVideo = await Video.find()
            res.json({ data: aVideo })
        } catch (error) { res.status(500).json({ message: error.message }) }
    }
}

export default VideoController
