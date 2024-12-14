import { Request, Response } from 'express';
import { MissionRepository } from '../../data/repositories/missionRepository';

const missionRepo = new MissionRepository();

export const getAllMissions = async (req: Request, res: Response) => {
  try {
    const missions = await missionRepo.getAll();
    res.status(200).json(missions);
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching missions', error: error.message });
  }
};

export const getMissionById = async (req: Request, res: Response) => {
  try {
    const mission = await missionRepo.getById(Number(req.params.id));
    if (mission) {
      res.status(200).json(mission);
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error fetching mission', error: error.message });
  }
};

export const createMission = async (req: Request, res: Response) => {
  try {
    const mission = await missionRepo.create(req.body);
    res.status(201).json(mission);
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating mission', error: error.message });
  }
};

export const updateMission = async (req: Request, res: Response) => {
  try {
    const mission = await missionRepo.update(Number(req.params.id), req.body);
    res.status(200).json(mission);
  } catch (error: any) {
    res.status(500).json({ message: 'Error updating mission', error: error.message });
  }
};

export const deleteMission = async (req: Request, res: Response) => {
  try {
    await missionRepo.delete(Number(req.params.id));
    res.status(200).json({ message: 'Mission deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: 'Error deleting mission', error: error.message });
  }
};
