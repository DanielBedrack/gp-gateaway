import axios from 'axios';
import { Request, Response } from 'express';
import { data_seed_url } from '../../urls/data/dataURL';

export const seedData = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(data_seed_url);
    res.status(200).json(response.data);
    console.log('Seeding Data Server')
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};
