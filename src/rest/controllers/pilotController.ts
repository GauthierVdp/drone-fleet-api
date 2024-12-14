import { Request, Response } from 'express';
import { PilotRepository } from '../../data/repositories/pilotRepository';

const pilotRepo = new PilotRepository();

export const getAllPilots = async (req: Request, res: Response) => {
  try {
    const pilots = await pilotRepo.getAll();
    res.status(200).json(pilots);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching pilots', error: error.message });
  }
};

export const getPilotById = async (req: Request, res: Response) => {
  try {
    const pilot = await pilotRepo.getById(Number(req.params.id));
    if (pilot) {
      res.status(200).json(pilot);
    } else {
      res.status(404).json({ message: 'Pilot not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching pilot', error: error.message });
  }
};

export const createPilot = async (req: Request, res: Response) => {
  try {
    const pilot = await pilotRepo.create(req.body);
    res.status(201).json(pilot);
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating pilot', error: error.message });
  }
};

export const updatePilot = async (req: Request, res: Response) => {
  try {
    const pilot = await pilotRepo.update(Number(req.params.id), req.body);
    res.status(200).json(pilot);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating pilot', error: error.message });
  }
};

export const deletePilot = async (req: Request, res: Response) => {
  try {
    await pilotRepo.delete(Number(req.params.id));
    res.status(200).json({ message: 'Pilot deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting pilot', error: error.message });
  }
};
