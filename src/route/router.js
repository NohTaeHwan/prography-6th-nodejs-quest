import express from 'express';
import todoController from './todoController';

const router = express.Router();

//module.exports = router;

router.get('/',todoController.getTodos);

router.get('/:todoId',todoController.getTodo);

router.post('/',todoController.createTodo);
/*
router.delete('/:id',controller.destroy);



router.put('/:id',controller.updateTodo);

*/
export default router;
