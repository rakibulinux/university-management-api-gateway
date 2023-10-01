import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createBuilding = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/buildings', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllBuildings = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/buildings', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getSingleBuilding = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.get(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const deleteSingleBuilding = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.delete(`/buildings/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const updateSingleBuilding = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.patch(`/buildings/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const BuildingService = {
  createBuilding,
  getAllBuildings,
  getSingleBuilding,
  updateSingleBuilding,
  deleteSingleBuilding
};
