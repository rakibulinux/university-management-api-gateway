import express from 'express';
import { BuildingControllers } from './building.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingValidation } from './building.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(BuildingValidation.createBuildingZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingControllers.createBuilding
);
router.patch(
  '/:id',
  validateRequest(BuildingValidation.updateBuildingZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingControllers.updateSingleBuilding
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingControllers.deleteSingleBuilding
);
router.get('/:id', BuildingControllers.getSingleBuilding);
router.get('/', BuildingControllers.getAllBuildings);

export const BuildingRoutes = router;
