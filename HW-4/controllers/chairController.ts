import { Request, Response } from 'express';
import { ChairModel, Chair } from '../models/chairModel';

export const getChairById = async (req: Request, res: Response) => {
  
  try {
    const Chair = await ChairModel.findById(req.params.id);
    if (Chair) {
      res.status(200).json(Chair);
    } else {
      res.status(404).send('Chair not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching Chair from database');
  }
};

export const getAllChairs = async (req: Request, res: Response) => {
  try {
    const Chairs = await ChairModel.find(req.query);
    res.status(200).json(Chairs);
  } catch (error) {
    res.status(500).send('Error fetching Chairs from database');
  }
};

export const createChair = async (req: Request, res: Response) => {
  try {
    const newChair: Chair = req.body;
    const createdChair = await ChairModel.create(newChair);
    res.status(201).json(createdChair);
  } catch (error) {
    res.status(500).send('Error creating Chair');
  }
};

export const updateChair = async (req: Request, res: Response) => {
  try {
    const updatedChair = await ChairModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedChair) {
      res.status(200).json(updatedChair);
    } else {
      res.status(404).send('Chair not found');
    }
  } catch (error) {
    res.status(500).send('Error updating Chair');
  }
};

export const deleteChair = async (req: Request, res: Response) => {
  try {
    const deletedChair = await ChairModel.findByIdAndDelete(req.params.id);
    if (deletedChair) {
      res.status(204).send('Chair deleted successfully');
    } else {
      res.status(404).send('Chair not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting Chair');
  }
};
