import { Request, Response } from 'express';
import { TableModel, Table } from '../models/tableModel';

export const getTableById = async (req: Request, res: Response) => {
  
  try {
    const table = await TableModel.findById(req.params.id);
    if (table) {
      res.status(200).json(table);
    } else {
      res.status(404).send('Table not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching table from database');
  }
};

export const getAllTables = async (req: Request, res: Response) => {
  try {
    const tables = await TableModel.find(req.query);
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).send('Error fetching tables from database');
  }
};

export const createTable = async (req: Request, res: Response) => {
  try {
    const newTable: Table = req.body;
    const createdTable = await TableModel.create(newTable);
    res.status(201).json(createdTable);
  } catch (error) {
    res.status(500).send('Error creating table');
  }
};

export const updateTable = async (req: Request, res: Response) => {
  try {
    const updatedTable = await TableModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedTable) {
      res.status(200).json(updatedTable);
    } else {
      res.status(404).send('Table not found');
    }
  } catch (error) {
    res.status(500).send('Error updating table');
  }
};

export const deleteTable = async (req: Request, res: Response) => {
  try {
    const deletedTable = await TableModel.findByIdAndDelete(req.params.id);
    if (deletedTable) {
      res.status(204).send('Table deleted successfully');
    } else {
      res.status(404).send('Table not found');
    }
  } catch (error) {
    res.status(500).send('Error deleting table');
  }
};
