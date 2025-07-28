import { Request, Response } from 'express';
import pool from '../db';

export const testDbConnection = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ dbTime: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};
