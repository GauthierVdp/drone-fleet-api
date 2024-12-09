import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllFleets = async (req: Request, res: Response) => {
  try {
    console.log('Fetching all fleets...');
    const fleets = await prisma.fleet.findMany();
    console.log('Fleets fetched:', fleets);
    res.status(200).json(fleets);
  } catch (error: any) {
    console.error('Error fetching fleets:', error);
    res.status(500).json({ message: 'Failed to retrieve fleets', error: error.message });
  }
};

export const getFleetById = async (req: Request, res: Response) => {
  try {
    const fleetId = Number(req.params.id);
    console.log(`Fetching fleet with ID: ${fleetId}`);
    const fleet = await prisma.fleet.findUnique({
      where: { id: fleetId },
    });
    if (fleet) {
      console.log('Fleet found:', fleet);
      res.status(200).json(fleet);
    } else {
      console.log('Fleet not found');
      res.status(404).json({ message: 'Fleet not found' });
    }
  } catch (error: any) {
    console.error('Error fetching fleet by ID:', error);
    res.status(500).json({ message: 'Failed to retrieve fleet', error: error.message });
  }
};

export const createFleet = async (req: Request, res: Response) => {
  try {
    console.log('Creating new fleet with data:', req.body);
    const fleet = await prisma.fleet.create({
      data: req.body,
    });
    console.log('Fleet created:', fleet);
    res.status(201).json(fleet);
  } catch (error: any) {
    console.error('Error creating fleet:', error);
    res.status(500).json({ message: 'Failed to create fleet', error: error.message });
  }
};

export const updateFleet = async (req: Request, res: Response) => {
  try {
    const fleetId = Number(req.params.id);
    console.log(`Updating fleet with ID: ${fleetId}`);
    const fleet = await prisma.fleet.update({
      where: { id: fleetId },
      data: req.body,
    });
    console.log('Fleet updated:', fleet);
    res.status(200).json(fleet);
  } catch (error: any) {
    console.error('Error updating fleet:', error);
    res.status(500).json({ message: 'Failed to update fleet', error: error.message });
  }
};

export const deleteFleet = async (req: Request, res: Response) => {
  try {
    const fleetId = Number(req.params.id);
    console.log(`Deleting fleet with ID: ${fleetId}`);
    await prisma.fleet.delete({
      where: { id: fleetId },
    });
    console.log('Fleet deleted successfully');
    res.status(200).json({ message: 'Fleet deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting fleet:', error);
    res.status(500).json({ message: 'Failed to delete fleet', error: error.message });
  }
};
