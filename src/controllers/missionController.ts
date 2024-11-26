import { Request, Response } from 'express';
import Mission from '../models/mission';

export const getAllMissions = async (req: Request, res: Response) => {
  try {
    const missions = await Mission.findAll();
    if (!missions || missions.length === 0) {
      return res.status(404).json({ message: 'No missions found' });
    }
    res.status(200).json(missions); // Send all missions as JSON
  } catch (error) {
    console.error('Error fetching missions:', error);
    res.status(500).json({ message: 'Failed to retrieve missions', error });
  }
};

export const getMissionById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mission = await Mission.findByPk(id);
    if (mission) {
      res.status(200).json(mission);
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mission', error });
  }
};

export const createMission = async (req: Request, res: Response) => {
  try {
    const mission = await Mission.create(req.body);
    res.status(201).json(mission);
  } catch (error) {
    res.status(500).json({ message: 'Error creating mission', error });
  }
};

export const updateMission = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mission = await Mission.findByPk(id);
    if (mission) {
      await mission.update(req.body);
      res.status(200).json(mission);
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating mission', error });
  }
};

export const deleteMission = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const mission = await Mission.findByPk(id);
    if (mission) {
      await mission.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Mission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting mission', error });
  }
};
