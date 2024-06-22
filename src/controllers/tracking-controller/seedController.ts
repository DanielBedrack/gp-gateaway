import axios from 'axios';
import { Request, Response } from 'express';
import { tracking_seed_url } from '../../urls/tracking/trackingURL';

export const seedTracking = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(tracking_seed_url);
    res.status(200).json(response.data);
    console.log('Seeding Tracking Server')
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};
