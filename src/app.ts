import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.use('/api/users', userRoutes);

export default app;
