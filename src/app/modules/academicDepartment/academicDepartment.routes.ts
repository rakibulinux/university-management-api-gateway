import express from 'express';
import { AcademicDepartmentControllers } from './academicDepartment.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.createAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentControllers.createAcademicDepartment
);
router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentControllers.updateSingleAcademicDepartment
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentControllers.deleteSingleAcademicDepartment
);
router.get('/:id', AcademicDepartmentControllers.getSingleAcademicDepartment);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
