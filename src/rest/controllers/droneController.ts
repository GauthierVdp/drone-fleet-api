import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllDrones = async (req: Request, res: Response) => {
  try {
    const drones = await prisma.drone.findMany();
    res.status(200).json(drones);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching drones', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getDroneById = async (req: Request, res: Response) => {
  try {
    const drone = await prisma.drone.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!drone) {
      return res.status(404).json({ message: 'Drone not found' });
    }
    res.status(200).json(drone);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching drone', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createDrone = async (req: Request, res: Response) => {
  try {
    const drone = await prisma.drone.create({ data: req.body });
    res.status(201).json(drone);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error creating drone', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateDrone = async (req: Request, res: Response) => {
  try {
    const drone = await prisma.drone.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.status(200).json(drone);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error updating drone', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deleteDrone = async (req: Request, res: Response) => {
  try {
    await prisma.drone.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json({ message: 'Drone deleted successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error deleting drone', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
