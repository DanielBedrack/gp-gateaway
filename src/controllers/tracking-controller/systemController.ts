// systemController.ts
import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';
import { tracking_systems_url } from '../../urls/tracking/trackingURL';

// Create a new system
export const createSystem = async (req: Request, res: Response) => {
  try {
    console.log('hello from create system func');
    const systemData = req.body;

    // Forward the data to the tracking microservice
    const trackingResponse = await axios.post(
      `${tracking_systems_url}/create-system`,
      systemData
    );

    // Check if the trackingResponse status is 200 before sending a response
    if (trackingResponse.status === 200) {
      // Extract the relevant data you want to send in the response
      return res.status(200).send(trackingResponse.data);
    } else {
      // Handle other response statuses if needed
      return res
        .status(trackingResponse.status)
        .json({ error: 'Failed to create system' });
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error forwarding data to tracking microservice:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all systems

export const getAllSystems = async (req: Request, res: Response) => {
  console.log('Hello from get all systems func');
  try {
    const userID = req.params._id;

    // Forward the GET request to the tracking microservice
    const trackingResponse = await axios.get(
      `${tracking_systems_url}/all-systems/${userID}`
    );

    // Return the response from the tracking microservice to the client
    // Check if the trackingResponse status is 200 before sending a response
    if (trackingResponse.status === 200) {
      // Extract the relevant data you want to send in the response
      res.status(200).send(trackingResponse.data);
    } else {
      // Handle other response statuses if needed
      res
        .status(trackingResponse.status)
        .json({ error: 'Failed to create system' });
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response?.status === 404) {
        return res.status(200).json({ message: 'No Systems Found' });
      }
    }
    console.error('Error fetching systems from tracking microservice:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific system by ID
export const getSystemById = async (req: Request, res: Response) => {
  const systemID = req.params._id;
  try {
    // Forward the GET request to the tracking microservice
    const trackingResponse = await axios.get(
      `${tracking_systems_url}/${systemID}`
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error fetching a system from tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a specific system by ID
export const updateSystem = async (req: Request, res: Response) => {
  const systemID = req.params._id;
  try {
    // Forward the PUT request to update the system in the tracking microservice
    const trackingResponse = await axios.put(
      `${tracking_systems_url}/${systemID}`,
      req.body
    );

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error updating a system in tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a specific system by systemID
export const deleteSystem = async (req: Request, res: Response) => {
  const systemID = req.params._id;
  try {
    // Forward the DELETE request to delete the system in the tracking microservice
    const trackingResponse = await axios.delete(
      `${tracking_systems_url}/${systemID}`
    );

    // Return the response from the tracking microservice to the client
    res.status(204).send();
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error deleting a system in tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
