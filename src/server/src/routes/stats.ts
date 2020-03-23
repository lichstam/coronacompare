import express from 'express';
import { getConfirmed, getPopulation } from '../utils';

const router = express.Router();

router.get('/population', async (req, res) => {
  const stats = await getPopulation();
  res.json(stats);
});

router.get('/confirmed', async (req, res) => {
  const stats = await getConfirmed();
  res.json(stats);
});

export default router;
