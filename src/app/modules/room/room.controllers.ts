import { NextFunction, Request, Response } from 'express';
import { RoomService } from './room.service';
import sendResponse from '../../../shared/response';

const createRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.createRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllRooms(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getSingleRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getSingleRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const updateSingleRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateSingleRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const deleteSingleRoom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteSingleRoom(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomControllers = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateSingleRoom,
  deleteSingleRoom
};
