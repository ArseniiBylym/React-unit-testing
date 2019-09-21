const {Router} = require('express');
const todosController = require('../controllers/todo.controller');
const {todoValidator} = require('../middlewares/validators');

const router = Router();

router.get('/', todosController.get);
router.post('/', todoValidator, todosController.add);
router.put('/:id', todoValidator, todosController.update);
router.delete('/:id', todosController.delete);

module.exports = router;
