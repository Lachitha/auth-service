import { Request, Response, NextFunction } from 'express'
import { isCelebrateError } from 'celebrate'
import { HttpError } from 'http-errors' // Assuming HttpError is a custom error class you might have

// Constants for HTTP status codes
const STATUS_UNAUTHORIZED = 401
const STATUS_BAD_REQUEST = 400
const STATUS_INTERNAL_SERVER_ERROR = 500

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Clone the error and log it
  const error = { ...err }
  console.error('Error: ', err)

  // Default error message
  error.message = err.message

  // Celebrate input error handling
  if (isCelebrateError(err) && error.details) {
    let errorDetails: any

    // Refactor common logic into a function if necessary
    const processError = (errorType: string) => {
      const errorObj = error.details.get(errorType)
      if (errorObj) {
        const {
          details: [detailsError],
        } = errorObj
        errorDetails = detailsError
        errorDetails.type = errorType
      }
    }

    processError('body')
    processError('query')
    processError('params')

    if (errorDetails) {
      error.message = `${errorDetails.message} in request ${errorDetails.type} as "${errorDetails.context.key}"`
      error.status = STATUS_BAD_REQUEST
    }
  }

  // Handling different types of errors
  if (error.statusCode === STATUS_UNAUTHORIZED) {
    res.status(STATUS_UNAUTHORIZED).json({
      code: STATUS_UNAUTHORIZED,
      success: false,
      message: error.message,
    })
  } else if (error.code === 'P2002') {
    // Use constants for error codes if possible
    res.status(STATUS_BAD_REQUEST).json({
      code: STATUS_BAD_REQUEST,
      success: false,
      message: 'Unique Value Validation ' + error.meta.target,
    })
  } else {
    // Sanitize the message for internal server errors
    const sanitizedMessage =
      error.status === STATUS_INTERNAL_SERVER_ERROR
        ? 'Internal Server Error'
        : error.message
    res.status(STATUS_INTERNAL_SERVER_ERROR).json({
      code: STATUS_INTERNAL_SERVER_ERROR,
      success: false,
      message: sanitizedMessage,
    })
  }

  next()
}

export default errorHandler
