import express from 'express';
import { getVlogs, createVlog } from '../controllers/vlogController.js';
import { verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getVlogs);
router.post('/', verifyAdmin, createVlog);

export default router;
