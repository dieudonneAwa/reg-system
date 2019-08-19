const { Todo } = require('../models');

export default {
  async create(req, res) {
    try {
      const todo = await Todo.create(req.body);
      return res.status(201).send(todo);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getAllTodos(req, res) {
    try {
      const todos = await Todo.findAll();
      if (todos) {
        return res.status(200).send({ todos });
      }
      return res.status(200).json({ message: 'Not Found' });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
