import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-enrolled-marks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getStudentMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-enrolled-marks/my-marks', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.patch(
    `/student-enrolled-marks/update-mark`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updateCourseFinalMarks = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.patch(
    `/student-enrolled-marks/update-final-mark`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const StudentEnrolledCourseMarkService = {
  getAllFromDB,
  getStudentMarks,
  updateCourseFinalMarks,
  updateMarks
};
