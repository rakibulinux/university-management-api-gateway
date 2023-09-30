import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { FacultyService } from './faculty.service';

const getAllFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getAllFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getSingleFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateSingleFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.deleteSingleFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyControllers = {
  getAllFaculties,
  getSingleFaculty,
  updateSingleFaculty,
  deleteSingleFaculty
};
