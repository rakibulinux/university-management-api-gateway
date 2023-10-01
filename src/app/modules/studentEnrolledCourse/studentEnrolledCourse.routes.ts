import express from 'express';
import { StudentEnrolledCourseControllers } from './studentEnrolledCourse.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.createStudentEnrolledCourseZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseControllers.createStudentEnrolledCourse
);
router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.updateStudentEnrolledCourseZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseControllers.updateSingleStudentEnrolledCourse
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseControllers.deleteSingleStudentEnrolledCourse
);
router.get('/:id', StudentEnrolledCourseControllers.getSingleStudentEnrolledCourse);
router.get('/', StudentEnrolledCourseControllers.getAllStudentEnrolledCourses);

export const StudentEnrolledCourseRoutes = router;
