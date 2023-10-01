import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseValidation } from './offeredCourse.validation';
import { OfferedCourseControllers } from './offeredCourse.controllers';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(OfferedCourseValidation.createOfferedCourseZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseControllers.createOfferedCourse
);
router.patch(
  '/:id',
  validateRequest(OfferedCourseValidation.updateOfferedCourseZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseControllers.updateSingleOfferedCourse
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseControllers.deleteSingleOfferedCourse
);
router.get('/:id', OfferedCourseControllers.getSingleOfferedCourse);
router.get('/', OfferedCourseControllers.getAllOfferedCourses);

export const OfferedCourseRoutes = router;
