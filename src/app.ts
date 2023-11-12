import express from 'express';
import { specs, swaggerUi } from './swagger';
import todosRouters from './routes/todos';
import {json} from 'body-parser';


const app = express();
const port = 3000;

app.use(json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/todos',todosRouters);

/*app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});
app.get('/', (req:any, res:any) => {
    res.send('Hello, Express with TypeScript!');
  });*/
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/**
 * @swagger
 * /:
 *   get:
 *     description: Get a greeting message
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });



