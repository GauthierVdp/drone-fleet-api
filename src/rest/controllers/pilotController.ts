import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllPilots = async (req: Request, res: Response) => {
  try {
    const pilots = await prisma.pilot.findMany();
    res.status(200).json(pilots);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching pilots', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getPilotById = async (req: Request, res: Response) => {
  try {
    const pilot = await prisma.pilot.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!pilot) {
      return res.status(404).json({ message: 'Pilot not found' });
    }
    res.status(200).json(pilot);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error fetching pilot', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createPilot = async (req: Request, res: Response) => {
  try {
    const pilot = await prisma.pilot.create({ data: req.body });
    res.status(201).json(pilot);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error creating pilot', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updatePilot = async (req: Request, res: Response) => {
  try {
    const pilot = await prisma.pilot.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.status(200).json(pilot);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error updating pilot', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deletePilot = async (req: Request, res: Response) => {
  try {
    await prisma.pilot.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json({ message: 'Pilot deleted successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error deleting pilot', error: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
