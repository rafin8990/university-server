import { NextFunction, Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../Shared/catchAsync'
import sendResponse from '../../../Shared/sendResponse'
import { UserService } from './user.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = UserService.createUser(user)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully',
      data: result,
    })
    next()
  }
)

export const UserController = {
  createUser,
}
