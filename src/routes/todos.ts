import {Router} from 'express';
import {createTodo} from '../controllers/todos'
const router = Router();

/**
 * @swagger
 * /todos:
 *   post:
 *     description: Create Todo Item
 *     responses:
 *       200:
 *         description: Success
 */

router.post('/',createTodo);
router.get('/');
router.patch('/:id');


export default router;