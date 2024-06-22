// Import necessary modules and dependencies
import axios from 'axios';
import { Request, Response } from 'express';
import { tracking_harvests_url } from '../../urls/tracking/trackingURL';

// Create a new harvest for a specific cycle
export const addHarvest = async (req: Request, res: Response) => {
  console.log('Hello from addHarvest');
  const cycleId = req.params._id;
  try {
    // Forward the data to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.post(
      `${tracking_harvests_url}/${cycleId}`,
      req.body
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).send(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error forwarding data to tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all harvests for a specific cycle
export const getAllHarvestsByCycleId = async (req: Request, res: Response) => {
  console.log('Hello from getAllHarvestsByCycleId');
  const cycleId = req.params._id;
  try {
    // Forward the GET request to the tracking microservice, including the system ID and cycle ID
    const trackingResponse = await axios.get(
      `${tracking_harvests_url}/all-harvests/${cycleId}`
    );

    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return the response from the tracking microservice to the client
    res.status(200).send(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching harvests for the cycle from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a specific harvest by ID for a specific cycle
export const getHarvestById = async (req: Request, res: Response) => {
  const harvestId = req.params._id;
  try {
    // Forward the GET request to the tracking microservice, including the system ID, cycle ID, and harvest ID
    const trackingResponse = await axios.get(
      `${tracking_harvests_url}/${harvestId}`
    );

    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return the response from the tracking microservice to the client
    res.status(200).json(trackingResponse.data);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching a specific harvest for the cycle from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a specific harvest by ID for a specific cycle
export const updateHarvest = async (req: Request, res: Response) => {
  const harvestId = req.params._id;
  try {
    // Forward the PUT request to the tracking microservice, including the system ID, cycle ID, and harvest ID
    const trackingResponse = await axios.put(
      `${tracking_harvests_url}/${harvestId}`,
      req.body
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).send(trackingResponse);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error updating a specific harvest for the cycle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a specific harvest by ID for a specific cycle
export const deleteHarvest = async (req: Request, res: Response) => {
  const harvestId = req.params._id;
  try {
    // Forward the DELETE request to the tracking microservice, including the system ID, cycle ID, and harvest ID
    const trackingResponse = await axios.delete(
      `${tracking_harvests_url}/${harvestId}`
    );

    // Handle the response from the tracking microservice (optional)
    console.log('Response from tracking microservice:', trackingResponse.data);

    // Return a response to the client (optional)
    res.status(200).send(trackingResponse);
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error deleting a specific harvest for the cycle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
