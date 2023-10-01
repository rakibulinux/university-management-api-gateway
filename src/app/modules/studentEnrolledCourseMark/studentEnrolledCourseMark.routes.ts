import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validation';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controllers';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.patch(
  '/update-mark',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarksZodSchema),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateMarks
);

router.patch(
  '/update-final-mark',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarksZodSchema),
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
