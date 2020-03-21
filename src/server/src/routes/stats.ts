import express from 'express';
import getStats from '../utils/get-stats';

const router = express.Router();

router.get('/', async (req, res) => {
  const stats = await getStats();
  res.json(stats);
});

export default router;
