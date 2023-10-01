import { NextFunction, Request, Response } from 'express';
import { SemesterRegistrationService } from './semesterRegistration.service';
import sendResponse from '../../../shared/response';

const createSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.createSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getAllSemesterRegistrations(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSingleSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleSemesterRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.updateSingleSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleSemesterRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SemesterRegistrationService.deleteSingleSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationControllers = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSingleSemesterRegistration,
  deleteSingleSemesterRegistration
};
