import axios from 'axios';
import { Request, Response } from 'express';
import { data_diseases_url } from '../../urls/data/dataURL';

export const getAllDiseases = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(data_diseases_url);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};

export const getDiseaseById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params; 
    const response = await axios.get(`${data_diseases_url}/${_id}`);

    if(!response){
      res.status(404).json({ message: 'Disease not found by his id'})
    }
      res.status(200).json(response.data);
      
  } catch (error) {
    // Handle network or other errors
    res
      .status(500)
      .json({ error: 'Error communicating with the data service' });
  }
};