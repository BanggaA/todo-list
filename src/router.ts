import { Router } from 'express';
import { tasksRoutes } from './routes';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api/v1/tasks', tasksRoutes);

export default router;
