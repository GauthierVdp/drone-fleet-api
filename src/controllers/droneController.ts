import { Request, Response } from 'express';
// src/controllers/droneController.ts
import  Drone  from '../models/drone';

// Get all drones
export const getAllDrones = async (req: Request, res: Response) => {
  try {
    const drones = await Drone.findAll();  // Fetch all drones from the database
    res.status(200).json(drones);  // Return the drones as JSON
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drones', error });
  }
};

// Get a single drone by ID
export const getDroneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findByPk(id);  // Fetch a drone by its primary key
    if (drone) {
      res.status(200).json(drone);  // Return the drone if found
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drone', error });
  }
};

// Create a new drone
export const createDrone = async (req: Request, res: Response) => {
  try {
    const drone = await Drone.create(req.body);  // Create a new drone from request body
    res.status(201).json(drone);  // Return the created drone
  } catch (error) {
    res.status(500).json({ message: 'Error creating drone', error });
  }
};

// Update an existing drone
export const updateDrone = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findByPk(id);  // Fetch drone by primary key
    if (drone) {
      await drone.update(req.body);  // Update the drone with request body data
      res.status(200).json(drone);  // Return the updated drone
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating drone', error });
  }
};

// Delete a drone
export const deleteDrone = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findByPk(id);  // Fetch drone by primary key
    if (drone) {
      await drone.destroy();  // Delete the drone
      res.status(204).json();  // No content, successful deletion
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting drone', error });
  }
};
