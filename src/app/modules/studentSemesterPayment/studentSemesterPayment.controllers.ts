import { NextFunction, Request, Response } from 'express';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';
import sendResponse from '../../../shared/response';

const getAllStudentSemesterPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getAllStudentSemesterPayments(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleStudentSemesterPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.getSingleStudentSemesterPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleStudentSemesterPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentSemesterPaymentService.updateSingleStudentSemesterPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleStudentSemesterPayment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentSemesterPaymentService.deleteSingleStudentSemesterPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentControllers = {
  getAllStudentSemesterPayments,
  getSingleStudentSemesterPayment,
  updateSingleStudentSemesterPayment,
  deleteSingleStudentSemesterPayment
};
