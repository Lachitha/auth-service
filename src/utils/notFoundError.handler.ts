import httpStatus from 'http-status'
import ErrorResponse from './errorResponse.util'

// handle resource not found errors
export const resourceNotFound = (req: any, res: any, next: any) => {
  throw new ErrorResponse(httpStatus.NOT_FOUND, 'Requested Resource Not Found')
}
