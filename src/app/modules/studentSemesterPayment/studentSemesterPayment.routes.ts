import express from 'express';
import { StudentSemesterPaymentControllers } from './studentSemesterPayment.controllers';

import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentSemesterPaymentControllers.updateSingleStudentSemesterPayment
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentSemesterPaymentControllers.deleteSingleStudentSemesterPayment
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentSemesterPaymentControllers.getSingleStudentSemesterPayment
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentSemesterPaymentControllers.getAllStudentSemesterPayments
);

export const StudentSemesterPaymentRoutes = router;
