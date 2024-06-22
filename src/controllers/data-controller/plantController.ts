import axios from 'axios';
import { Request, Response } from 'express';
import { data_plants_url } from '../../urls/data/dataURL';

export const getAllPlants = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(data_plants_url);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};

export const getPlantById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const plantResponse = await axios.get(`${data_plants_url}/${_id}`);

    if (!plantResponse) {
      res.status(404).json({ message: 'Plant Not Found' });
    }
    res.status(200).json(plantResponse.data);
  } catch (error) {
    // Handle network or other errors
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};
