import { NextFunction, Request, Response } from 'express';
import { ManagementDepartmentService } from './managementDepartment.service';
import sendResponse from '../../../shared/response';

const createManagementDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.createManagementDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllManagementDepartments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getAllManagementDepartments(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleManagementDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ManagementDepartmentService.getSingleManagementDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleManagementDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ManagementDepartmentService.updateSingleManagementDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleManagementDepartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ManagementDepartmentService.deleteSingleManagementDepartment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const ManagementDepartmentControllers = {
  createManagementDepartment,
  getAllManagementDepartments,
  getSingleManagementDepartment,
  updateSingleManagementDepartment,
  deleteSingleManagementDepartment
};
