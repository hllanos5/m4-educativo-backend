import { Router } from 'express';
import VideoController from '../controllers/VideoController.js';

const router = Router();

router.get('/', VideoController.getVideo);
router.get('/:id', VideoController.getVideoId);
router.get('/user', VideoController.getVideoPorUserId);

export default router;
