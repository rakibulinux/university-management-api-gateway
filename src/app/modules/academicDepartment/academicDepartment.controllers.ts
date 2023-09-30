import { NextFunction, Request, Response } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const createAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.createAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllAcademicDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getAllAcademicDepartments(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.updateSingleAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleAcademicDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.deleteSingleAcademicDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentControllers = {
  createAcademicDepartment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateSingleAcademicDepartment,
  deleteSingleAcademicDepartment
};
