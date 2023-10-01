import { NextFunction, Request, Response } from 'express';

import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';

const createOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllOfferedCourseClassSchedules = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedules(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseClassScheduleService.getSingleOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result =
      await OfferedCourseClassScheduleService.updateSingleOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleOfferedCourseClassSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result =
      await OfferedCourseClassScheduleService.deleteSingleOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleControllers = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedules,
  getSingleOfferedCourseClassSchedule,
  updateSingleOfferedCourseClassSchedule,
  deleteSingleOfferedCourseClassSchedule
};
