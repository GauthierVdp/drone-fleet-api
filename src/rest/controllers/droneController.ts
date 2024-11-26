import { Request, Response } from 'express';
import  Drone  from '../../data/models/drone';

export const getAllDrones = async (req: Request, res: Response) => {
  try {
    const drones = await Drone.findAll(); 
    res.status(200).json(drones); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drones', error });
  }
};

export const getDroneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findByPk(id);
    if (drone) {
      res.status(200).json(drone);  
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching drone', error });
  }
};

export const createDrone = async (req: Request, res: Response) => {
  try {
    const drone = await Drone.create(req.body);
    res.status(201).json(drone);
  } catch (error) {
    res.status(500).json({ message: 'Error creating drone', error });
  }
};

export const updateDrone = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findByPk(id); 
    if (drone) {
      await drone.update(req.body);
      res.status(200).json(drone);
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating drone', error });
  }
};

export const deleteDrone = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findByPk(id);
    if (drone) {
      await drone.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Drone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting drone', error });
  }
};
