import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  if (uploadedImage) {
    req.body.student.profileImage = uploadedImage.secure_url;
  }
  console.log('req.body', req.body);

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post(`/users/create-student`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  console.log('response', response);
  return response;
};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  console.log('req.file', file);
  if (uploadedImage) {
    req.body.faculty.profileImage = uploadedImage.secure_url;
    console.log(uploadedImage);
  }
  console.log('req.body', req.body);

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post(`/users/create-faculty`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  console.log('response', response);
  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file;
  const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);
  console.log('req.file', file);
  if (uploadedImage) {
    req.body.admin.profileImage = uploadedImage.secure_url;
    console.log(uploadedImage);
  }
  console.log('req.body.admin', req.body);

  const response: IGenericResponse = await AuthService.post(`/users/create-admin`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  console.log('response', response);
  return response;
};

export const UserService = { createStudent, createFaculty, createAdmin };
