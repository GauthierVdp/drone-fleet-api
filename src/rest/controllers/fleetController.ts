import { Request, Response } from 'express';
import Fleet from '../../data/models/fleet';

export const getAllFleets = async (req: Request, res: Response) => {
  try {
    const fleets = await Fleet.findAll();
    res.status(200).json(fleets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fleets', error });
  }
};

export const getFleetById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fleet = await Fleet.findByPk(id);
    if (fleet) {
      res.status(200).json(fleet);
    } else {
      res.status(404).json({ message: 'Fleet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fleet', error });
  }
};

export const createFleet = async (req: Request, res: Response) => {
  try {
    const fleet = await Fleet.create(req.body);
    res.status(201).json(fleet);
  } catch (error) {
    res.status(500).json({ message: 'Error creating fleet', error });
  }
};

export const updateFleet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fleet = await Fleet.findByPk(id);
    if (fleet) {
      await fleet.update(req.body);
      res.status(200).json(fleet);
    } else {
      res.status(404).json({ message: 'Fleet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating fleet', error });
  }
};

export const deleteFleet = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fleet = await Fleet.findByPk(id);
    if (fleet) {
      await fleet.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Fleet not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting fleet', error });
  }
};
