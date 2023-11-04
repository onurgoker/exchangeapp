import express, { Request, Response , Application } from 'express';
import migrateUsers from './config/migration';

const app: Application = express();
const port = process.env.SERVER_PORT ?? 8000;
  
migrateUsers();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.post('/buy', (req: Request, res: Response) => {
    res.send('Buy! Welcome to Express & TypeScript Server');
});  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});