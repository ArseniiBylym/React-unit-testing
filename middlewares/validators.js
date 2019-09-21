const {body} = require('express-validator');

exports.todoValidator = [
  body('title')
    .not()
    .isEmpty()
    .trim()
    .withMessage('Title is required'),
  body('text')
    .not()
    .isEmpty()
    .withMessage('Text is required'),
];
