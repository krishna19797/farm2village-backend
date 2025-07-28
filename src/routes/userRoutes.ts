import { Router } from 'express';
import { testDbConnection } from '../controllers/userController';

const router = Router();

router.get('/test-db', testDbConnection);

export default router;
