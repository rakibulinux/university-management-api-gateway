import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { ENUM_USER_ROLE } from '../../../enums/user';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validation';
import { OfferedCourseSectionControllers } from './offeredCourseSection.controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  validateRequest(OfferedCourseSectionValidation.createOfferedCourseSectionZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseSectionControllers.createOfferedCourseSection
);
router.patch(
  '/:id',
  validateRequest(OfferedCourseSectionValidation.updateOfferedCourseSectionZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseSectionControllers.updateSingleOfferedCourseSection
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseSectionControllers.deleteSingleOfferedCourseSection
);
router.get('/:id', OfferedCourseSectionControllers.getSingleOfferedCourseSection);
router.get('/', OfferedCourseSectionControllers.getAllOfferedCourseSections);

export const OfferedCourseSectionRoutes = router;
