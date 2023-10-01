import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AdminService } from './admin.service';

const getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getAllAdmins(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getSingleAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.updateSingleAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.deleteSingleAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AdminControllers = {
  getAllAdmins,
  getSingleAdmin,
  updateSingleAdmin,
  deleteSingleAdmin
};
