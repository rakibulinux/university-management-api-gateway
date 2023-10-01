import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const getAllAdmins = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.get('/admin', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getSingleAdmin = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await AuthService.get(`/admin/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const deleteSingleAdmin = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await AuthService.delete(`/admin/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const updateSingleAdmin = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await AuthService.patch(`/admin/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AdminService = {
  getAllAdmins,
  getSingleAdmin,
  updateSingleAdmin,
  deleteSingleAdmin
};
