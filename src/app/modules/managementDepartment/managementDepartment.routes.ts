import express from 'express';
import { ManagementDepartmentControllers } from './managementDepartment.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(ManagementDepartmentValidation.createManagementDepartmentZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ManagementDepartmentControllers.createManagementDepartment
);
router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.updateManagementDepartmentZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ManagementDepartmentControllers.updateSingleManagementDepartment
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ManagementDepartmentControllers.deleteSingleManagementDepartment
);
router.get('/:id', ManagementDepartmentControllers.getSingleManagementDepartment);
router.get('/', ManagementDepartmentControllers.getAllManagementDepartments);

export const ManagementDepartmentRoutes = router;
