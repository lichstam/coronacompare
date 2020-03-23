import express from 'express';
import endpoints from './endpoints';

const router = express.Router();

endpoints.forEach(({ endpoint, fn }) => {
  router.get(endpoint, async (req, res) => {
    const stats = await fn();
    res.json(stats);
  });
});


export default router;
