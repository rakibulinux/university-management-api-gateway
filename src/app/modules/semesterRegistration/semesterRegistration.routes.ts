import express from 'express';
import { SemesterRegistrationControllers } from './semesterRegistration.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(SemesterRegistrationValidation.createSemesterRegistrationZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationControllers.createSemesterRegistration
);
router.patch(
  '/:id',
  validateRequest(SemesterRegistrationValidation.updateSemesterRegistrationZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationControllers.updateSingleSemesterRegistration
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationControllers.deleteSingleSemesterRegistration
);
router.get('/:id', SemesterRegistrationControllers.getSingleSemesterRegistration);
router.get('/', SemesterRegistrationControllers.getAllSemesterRegistrations);

export const SemesterRegistrationRoutes = router;
