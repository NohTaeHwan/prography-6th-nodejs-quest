import express from 'express';
import todoController from './todoController';
import commentController from './commentController';

const router = express.Router();

router.get('/',todoController.getTodos);

router.get('/:todoId',todoController.getTodo);

router.post('/',todoController.createTodo);

router.put('/:todoId',todoController.updateTodo);

router.put('/:todoId/complete',todoController.completeTodo);

router.delete('/:todoId',todoController.removeTodo);

router.post('/:todoId/comments',commentController.createComment);

router.get('/:todoId/comments',commentController.getComments);

router.get('/:todoId/comments/:commentId',commentController.getComment);

router.delete('/:todoId/comments/:commentId',commentController.removeComment);

router.put('/:todoId/comments/:commentId',commentController.updateComment);

export default router;
