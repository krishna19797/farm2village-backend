import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Farm2Village Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
