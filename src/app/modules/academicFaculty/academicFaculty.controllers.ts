import { NextFunction, Request, Response } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';

const createAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.createAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllAcademicFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllAcademicFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getSingleAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateSingleAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleAcademicFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteSingleAcademicFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
  deleteSingleAcademicFaculty
};
