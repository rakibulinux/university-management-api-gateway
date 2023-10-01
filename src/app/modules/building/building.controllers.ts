import { NextFunction, Request, Response } from 'express';
import { BuildingService } from './building.service';
import sendResponse from '../../../shared/response';

const createBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.createBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllBuildings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllBuildings(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getSingleBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateSingleBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleBuilding = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteSingleBuilding(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingControllers = {
  createBuilding,
  getAllBuildings,
  getSingleBuilding,
  updateSingleBuilding,
  deleteSingleBuilding
};
