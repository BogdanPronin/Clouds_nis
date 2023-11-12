import { Request, Response } from 'express';
import { CupboardModel, Cupboard } from '../models/cupboardModel';

export const getCupboardById = async (req: Request, res: Response) => {
  
  try {
    const Cupboard = await CupboardModel.findById(req.params.id);
    if (Cupboard) {
      res.status(200).json(Cupboard);
    } else {
      res.status(404).send('Cupboard not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching Cupboard from database');
  }
};

export const getAllCupboards = async (req: Request, res: Response) => {
  try {
    const Cupboards = await CupboardModel.find(req.query);
    res.status(200).json(Cupboards);
  } catch (error) {
    res.status(500).send('Error fetching Cupboards from database');
  }
};

export const createCupboard = async (req: Request, res: Response) => {
  try {
    const newCupboard: Cupboard = req.body;
    const createdCupboard = await CupboardModel.create(newCupboard);
    res.status(201).json(createdCupboard);
  } catch (error) {
    res.status(500).send('Error creating Cupboard');
  }
};

export const updateCupboard = async (req: Request, res: Response) => {
  try {
    const updatedCupboard = await CupboardModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedCupboard) {
      res.status(200).json(updatedCupboard);
    } else {
      res.status(404).send('Cupboard not found');
    }
  } catch (error) {
    res.status(500).send('Error updating Cupboard');
  }
};

export const deleteCupboard = async (req: Request, res: Response) => {
  try {
    const deletedCupboard = await CupboardModel.findByIdAndDelete(req.params.id);
    if (deletedCupboard) {
      res.status(204).send('Cupboard deleted successfully');
    } else {
      res.status(404).send('Cupboard not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting Cupboard');
  }
};
