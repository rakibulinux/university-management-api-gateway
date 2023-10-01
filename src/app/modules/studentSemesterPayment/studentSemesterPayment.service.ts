import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const getAllStudentSemesterPayments = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-semester-payments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getSingleStudentSemesterPayment = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.get(`/student-semester-payments/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const deleteSingleStudentSemesterPayment = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.delete(`/student-semester-payments/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const updateSingleStudentSemesterPayment = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.patch(
    `/student-semester-payments/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const StudentSemesterPaymentService = {
  getAllStudentSemesterPayments,
  getSingleStudentSemesterPayment,
  updateSingleStudentSemesterPayment,
  deleteSingleStudentSemesterPayment
};
