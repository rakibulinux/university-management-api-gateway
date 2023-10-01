import express from 'express';
import { RoomControllers } from './room.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { RoomValidation } from './room.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(RoomValidation.createRoomZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  RoomControllers.createRoom
);
router.patch(
  '/:id',
  validateRequest(RoomValidation.updateRoomZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  RoomControllers.updateSingleRoom
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  RoomControllers.deleteSingleRoom
);
router.get('/:id', RoomControllers.getSingleRoom);
router.get('/', RoomControllers.getAllRooms);

export const RoomRoutes = router;
