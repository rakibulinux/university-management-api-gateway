import { NextFunction, Request, Response } from 'express';
import { CourseService } from './course.service';
import sendResponse from '../../../shared/response';

const createCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.createCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getAllCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.getSingleCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.updateSingleCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CourseService.deleteSingleCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  updateSingleCourse,
  deleteSingleCourse
};
