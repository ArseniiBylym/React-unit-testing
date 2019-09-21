const {Schema, model} = require('mongoose');

const todosSchema = new Schema(
  {
    title: {type: String, required: true},
    text: {type: String, required: true},
    done: {type: Boolean, required: false, default: false},
  },
  {
    timestamps: true,
  },
);

module.exports = model('Todo', todosSchema);
