import { Request, Response } from 'express';
import { DroneRepository } from '../../data/repositories/droneRepository';
import logger from '../../logger'; // Import the logger

const droneRepo = new DroneRepository();

export const getAllDrones = async (req: Request, res: Response) => {
  try {
    const drones = await droneRepo.getAll();
    res.status(200).json(drones);
  } catch (error: any) {
    logger.error('Error fetching drones:', error); // Log the error details
    res.status(500).json({ message: 'Error fetching drones', error: error.message });
  }
};

export const getDroneById = async (req: Request, res: Response) => {
  try {
    const drone = await droneRepo.getById(Number(req.params.id));
    if (drone) {
      res.status(200).json(drone);
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error: any) {
    logger.error('Error fetching drone by ID:', error); // Log the error details
    res.status(500).json({ message: 'Error fetching drone', error: error.message });
  }
};

export const createDrone = async (req: Request, res: Response) => {
  try {
    const drone = await droneRepo.create(req.body);
    res.status(201).json(drone);
  } catch (error: any) {
    logger.error('Error creating drone:', error.message);  // Log the error message
    res.status(500).json({ message: 'Error creating drone', error: error.message });
  }
};

export const updateDrone = async (req: Request, res: Response) => {
  try {
    const droneId = Number(req.params.id);
    const updatedData = req.body;

    const existingDrone = await droneRepo.getById(droneId);
    if (!existingDrone) {
      return res.status(404).json({ message: 'Drone not found' });
    }

    const updatedDrone = await droneRepo.update(droneId, updatedData);
    res.status(200).json(updatedDrone);
  } catch (error: any) {
    logger.error('Error updating drone:', error); // Log the error details
    res.status(500).json({ message: 'Error updating drone', error: error.message });
  }
};

export const deleteDrone = async (req: Request, res: Response) => {
  try {
    const droneId = Number(req.params.id);

    const existingDrone = await droneRepo.getById(droneId);
    if (!existingDrone) {
      return res.status(404).json({ message: 'Drone not found' });
    }

    await droneRepo.delete(droneId);
    res.status(200).json({ message: 'Drone deleted successfully' });
  } catch (error: any) {
    logger.error('Error deleting drone:', error); // Log the error details
    res.status(500).json({ message: 'Error deleting drone', error: error.message });
  }
};
