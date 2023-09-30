import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AuthenticationService } from './auth.service';
import config from '../../../config';
import httpStatus from 'http-status';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.loginUser(req);
    const { refreshToken, ...others } = result.data;

    const cookieOption = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', refreshToken, cookieOption);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User Login Successfully',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.refreshToken(req);
    const { refreshToken, ...others } = result.data;

    const cookieOption = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', refreshToken, cookieOption);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'New Refresh Token Generate Successfully',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthenticationService.changePassword(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthenticationController = {
  loginUser,
  refreshToken,
  changePassword
};
