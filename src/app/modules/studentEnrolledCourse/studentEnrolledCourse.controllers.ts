import { NextFunction, Request, Response } from 'express';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';
import sendResponse from '../../../shared/response';

const createStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.createStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllStudentEnrolledCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getAllStudentEnrolledCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleStudentEnrolledCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentEnrolledCourseService.getSingleStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleStudentEnrolledCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentEnrolledCourseService.updateSingleStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleStudentEnrolledCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentEnrolledCourseService.deleteSingleStudentEnrolledCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseControllers = {
  createStudentEnrolledCourse,
  getAllStudentEnrolledCourses,
  getSingleStudentEnrolledCourse,
  updateSingleStudentEnrolledCourse,
  deleteSingleStudentEnrolledCourse
};
