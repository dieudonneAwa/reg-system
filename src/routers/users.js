import express from 'express';

const { users, todos } = require('../controllers/index');

const router = express.Router();

router.get('/', (req, res) => res.json({ Hi: 'Welcome to my api' }));

router.post('/auth/signup', users.signUp);
router.post('/todos', todos.create);
router.get('/todos', todos.getAllTodos);

export default router;
