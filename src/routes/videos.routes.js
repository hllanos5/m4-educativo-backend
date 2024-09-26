import { Router } from 'express';
import VideoController from '../controllers/VideoController.js';
import { handleErrors } from '../middlewares/middleware.js';

const router = Router();

router.get('/', VideoController.getUserVideos, handleErrors);
router.get('/:id', VideoController.getVideoById, handleErrors);

export default router;
