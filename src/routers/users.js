import express from 'express';
import auth from '../helpers/auth';

const { users, todos } = require('../controllers/index');

const router = express.Router();

router.get('/', (req, res) => res.json({ Hi: 'Welcome to my api' }));

router.post('/auth/signup', users.signUp);
router.post('/todos', auth.verifyToken, todos.create);
router.get('/todos', auth.verifyToken, todos.getAllTodos);

export default router;
