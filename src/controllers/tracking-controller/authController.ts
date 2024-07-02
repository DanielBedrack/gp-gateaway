// systemController.ts
import axios from 'axios';
import { Request, Response, response } from 'express';
import { tracking_users_url } from '../../urls/tracking/trackingURL';

// // Get all plants for a specific cycle
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     console.log('hello from getAllUsers');
//     // Forward the GET request to the tracking microservice, including the system ID and cycle ID
//     const userResponse = await axios.get(`${tracking_users_url}`);

//     // Return the response from the tracking microservice to the client
//     res.status(200).json(userResponse.data);
//   } catch (error) {
//     // Handle errors and send an error response to the client
//     console.error(
//       'Error fetching plants for the cycle from tracking microservice:',
//       error
//     );
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const registerWithEmailAndPassword = async (
  req: Request,
  res: Response
) => {
  try {
    console.log('hello from registerWithEmailAndPassword');
    const userData = req.body;

    const userResponse = await axios.post(
      `${tracking_users_url}/register`,
      userData
    );

    if (userResponse.status === 200) {
      return res.status(200).json(userResponse.data);
    } else {
      // Handle other status codes if needed
      return res.status(userResponse.status).json(userResponse.data); // Pass the entire response data to the client
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error posting User for Tracking microservice from API-Gateaway:',
      error
    );
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// export const getUserByEmail = async (req: Request, res: Response) => {
//   try {
//     console.log('hello from getUserByEmail');
//     const userEmail = req.params.email;
//     const userResponse = await axios.get(`${tracking_users_url}/${userEmail}`);

//     if (userResponse.status === 200) {
//       return res.status(200).json(userResponse.data);
//     } else {
//       // Handle other status codes if needed
//       return res.status(userResponse.status).json(userResponse.data); // Pass the entire response data to the client
//     }
//   } catch (error) {
//     // Handle errors and send an error response to the client
//     console.error(
//       'Error fetching user by email from tracking microservice:',
//       error
//     );
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const signInEmailAndPassword = async (req: Request, res: Response) => {
  try {
    console.log('hello from userLogin');
    // Forward the GET request to the tracking microservice, including the system ID and cycle ID
    const userResponse = await axios.post(
      `${tracking_users_url}/login`,
      req.body
    );

    if (userResponse.status === 200) {
      return res.status(200).json(userResponse.data);
    } else {
      // Handle other status codes if needed
      return res.status(userResponse.status).json(userResponse.data); // Pass the entire response data to the client
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error('Error fetching user from tracking microservice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     console.log('hello from updateUser');
//     const userEmail = req.params.email;
//     //const newUser = req.body;
//     const userResponse = await axios.put(`${tracking_users_url}/${userEmail}`);
//     console.log(userResponse);
//     res.status(200).json(userResponse.data);
//   } catch (error) {
//     // Handle errors and send an error response to the client
//     console.error(
//       'Error fetching user by email from tracking microservice:',
//       error
//     );
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log('hello from deleteUser');
    const userEmail = req.params.email;
    const userResponse = await axios.delete(
      `${tracking_users_url}/${userEmail}`
    );
    console.log(userResponse);
    if (userResponse.status === 200) {
      return res.status(200).json(userResponse.data);
    } else {
      // Handle other status codes if needed
      return res.status(userResponse.status).json(userResponse.data); // Pass the entire response data to the client
    }
  } catch (error) {
    // Handle errors and send an error response to the client
    console.error(
      'Error fetching user by email from tracking microservice:',
      error
    );
    res.status(500).json({ error: 'Internal server error' });
  }
};
