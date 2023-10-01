import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';

const createOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.createOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllOfferedCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getSingleOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updateSingleOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteSingleOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseControllers = {
  createOfferedCourse,
  getAllOfferedCourses,
  getSingleOfferedCourse,
  updateSingleOfferedCourse,
  deleteSingleOfferedCourse
};
