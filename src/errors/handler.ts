import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrorsList {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errorsList: ValidationErrorsList = {};

    error.inner.forEach((err) => {
      errorsList[err.path] = err.errors;
    });

    return response.status(400).json({
      message: 'Validation fails',
      errorsList,
    });
  }

  console.error(error);
  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
