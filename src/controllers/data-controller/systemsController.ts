import axios from 'axios';
import { Request, Response } from 'express';
import { data_systems_url } from '../../urls/data/dataURL';

export const getAllSystems = async (req: Request, res: Response) => {
  try {
    const systemsResponse = await axios.get(data_systems_url);
    console.log(systemsResponse.data);
    if (!systemsResponse) {
      res.status(404).json({ message: 'System Not Found By User ID' });
    }
    res.status(200).json(systemsResponse.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};

export const getSystemByUserId = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params; 
    const systemResponse = await axios.get(`${data_systems_url}/${_id}`);

    if (!systemResponse) {
      res.status(404).json({ message: 'System Not Found By User ID' });
    }
    // Check the status code of the response before sending it
    res.status(200).json(systemResponse.data);
  } catch (error) {
    // Handle network or other errors
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};
