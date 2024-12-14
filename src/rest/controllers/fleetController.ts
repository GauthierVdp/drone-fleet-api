import { Request, Response } from 'express';
import { FleetRepository } from '../../data/repositories/fleetRepository';

const fleetRepo = new FleetRepository();

export const getAllFleets = async (req: Request, res: Response) => {
  try {
    const fleets = await fleetRepo.getAll();
    res.status(200).json(fleets);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching fleets', error: error.message });
  }
};

export const getFleetById = async (req: Request, res: Response) => {
  try {
    const fleet = await fleetRepo.getById(Number(req.params.id));
    if (fleet) {
      res.status(200).json(fleet);
    } else {
      res.status(404).json({ message: 'Fleet not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching fleet', error: error.message });
  }
};

export const createFleet = async (req: Request, res: Response) => {
  try {
    const fleet = await fleetRepo.create(req.body);
    res.status(201).json(fleet);
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating fleet', error: error.message });
  }
};

export const updateFleet = async (req: Request, res: Response) => {
  try {
    const fleet = await fleetRepo.update(Number(req.params.id), req.body);
    res.status(200).json(fleet);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating fleet', error: error.message });
  }
};

export const deleteFleet = async (req: Request, res: Response) => {
  try {
    await fleetRepo.delete(Number(req.params.id));
    res.status(200).json({ message: 'Fleet deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting fleet', error: error.message });
  }
};
