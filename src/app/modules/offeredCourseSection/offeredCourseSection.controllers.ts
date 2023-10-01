import { NextFunction, Request, Response } from 'express';

import sendResponse from '../../../shared/response';
import { OfferedCourseSectionService } from './offeredCourseSection.service';

const createOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.createOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllOfferedCourseSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getAllOfferedCourseSections(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getSingleOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleOfferedCourseSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseSectionService.updateSingleOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleOfferedCourseSection = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await OfferedCourseSectionService.deleteSingleOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionControllers = {
  createOfferedCourseSection,
  getAllOfferedCourseSections,
  getSingleOfferedCourseSection,
  updateSingleOfferedCourseSection,
  deleteSingleOfferedCourseSection
};
