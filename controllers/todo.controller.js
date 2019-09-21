const Todo = require('../models/Todos.model');
const {validationResult} = require('express-validator');

exports.get = async (req, res, next) => {
  try {
    todos = await Todo.find().exec();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(404).json('Todos not found');
  }
};

exports.add = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json(validationErrors.array());
  }
  try {
    const todo = await new Todo({...req.body}).save();
    return res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json(validationErrors.array());
  }
  try {
    const {id} = req.params;
    const todo = await Todo.findOneAndUpdate({_id: id}, {$set: {...req.body}}, {new: true}).exec();
    return res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const {id} = req.params;
    const todo = await Todo.findByIdAndDelete(id).exec();
    return res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};
