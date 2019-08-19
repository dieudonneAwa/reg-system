import express from 'express';
import { users } from '../controllers/index';
import Todo from '../controllers/todos';

const router = express.Router();

router.get('/', (req, res) => res.json({ Hi: 'Welcome to my api' }));

router.post('/auth/signup', users.signUp);
router.post('/todos', Todo.create);
router.get('/todos', Todo.getAllTodos);

export default router;
