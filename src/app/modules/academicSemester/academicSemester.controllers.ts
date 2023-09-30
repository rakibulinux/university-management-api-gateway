import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const createAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.createAcademicSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllAcademicSemesters = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllAcademicSemesters(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleAcademicSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateSingleAcademicSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleAcademicSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteSingleAcademicSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
  deleteSingleAcademicSemester
};
