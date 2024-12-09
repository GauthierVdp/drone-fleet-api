import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMissions = async (req: Request, res: Response) => {
  try {
    console.log('Fetching all missions...');
    const missions = await prisma.mission.findMany();
    console.log('Missions fetched:', missions);
    res.status(200).json(missions);
  } catch (error: any) {
    console.error('Error fetching missions:', error);
    res.status(500).json({ message: 'Failed to retrieve missions', error: error.message });
  }
};

export const getMissionById = async (req: Request, res: Response) => {
  try {
    const missionId = Number(req.params.id);
    console.log(`Fetching mission with ID: ${missionId}`);
    const mission = await prisma.mission.findUnique({
      where: { id: missionId },
    });
    if (mission) {
      console.log('Mission found:', mission);
      res.status(200).json(mission);
    } else {
      console.log('Mission not found');
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error: any) {
    console.error('Error fetching mission by ID:', error);
    res.status(500).json({ message: 'Failed to retrieve mission', error: error.message });
  }
};

export const createMission = async (req: Request, res: Response) => {
  try {
    console.log('Creating new mission with data:', req.body);
    const mission = await prisma.mission.create({
      data: req.body,
    });
    console.log('Mission created:', mission);
    res.status(201).json(mission);
  } catch (error: any) {
    console.error('Error creating mission:', error);
    res.status(500).json({ message: 'Failed to create mission', error: error.message });
  }
};

export const updateMission = async (req: Request, res: Response) => {
  try {
    const missionId = Number(req.params.id);
    console.log(`Updating mission with ID: ${missionId}`);
    const mission = await prisma.mission.update({
      where: { id: missionId },
      data: req.body,
    });
    console.log('Mission updated:', mission);
    res.status(200).json(mission);
  } catch (error: any) {
    console.error('Error updating mission:', error);
    res.status(500).json({ message: 'Failed to update mission', error: error.message });
  }
};

export const deleteMission = async (req: Request, res: Response) => {
  try {
    const missionId = Number(req.params.id);
    console.log(`Deleting mission with ID: ${missionId}`);
    await prisma.mission.delete({
      where: { id: missionId },
    });
    console.log('Mission deleted successfully');
    res.status(200).json({ message: 'Mission deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting mission:', error);
    res.status(500).json({ message: 'Failed to delete mission', error: error.message });
  }
};
