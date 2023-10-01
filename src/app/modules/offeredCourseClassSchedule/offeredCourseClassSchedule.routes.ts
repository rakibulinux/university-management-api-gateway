import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';
import { OfferedCourseClassScheduleControllers } from './offeredCourseClassSchedule.controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  validateRequest(OfferedCourseClassScheduleValidation.createOfferedCourseClassScheduleZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseClassScheduleControllers.createOfferedCourseClassSchedule
);
router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.updateOfferedCourseClassScheduleZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseClassScheduleControllers.updateSingleOfferedCourseClassSchedule
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseClassScheduleControllers.deleteSingleOfferedCourseClassSchedule
);
router.get('/:id', OfferedCourseClassScheduleControllers.getSingleOfferedCourseClassSchedule);
router.get('/', OfferedCourseClassScheduleControllers.getAllOfferedCourseClassSchedules);

export const OfferedCourseClassScheduleRoutes = router;
