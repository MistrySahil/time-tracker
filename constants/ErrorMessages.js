const GeneralErrorsMessages = {
  INVALID_REQUEST_BODY: 'Kindly provide the necessary parameters.',
  UNKNOWN_ERROR: 'Unknown error',
}

const UserErrorMessages = {
  TOKEN_NOT_FOUND: 'The authentication token could not be found.',
  INVALID_TOKEN: 'The provided token is invalid.',
  INVALID_EMAIL_PASSWORD: 'Invalid email address and password combination.',
  USER_NOT_FOUND: 'The specified user could not be found.',
  EMAIL_NOT_VERIFIED: 'Please verify your email address before proceeding.',
  INVALID_USER_DETAILS: 'The provided user details are invalid.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  USER_ALREADY_EXIST: 'A user is already registered under your organization."',
}

const TaskErrorMessages = {
  TASK_NOT_FOUND: 'Task not found',
  TASK_IS_ALREADY_COMPLETED: 'Task is already completed',
  TASK_IS_ALREADY_RUNNING: 'Task is already running',
}

const DatabaseErrorMessages = {
  ENTITY_NOT_FOUND: 'No record found for the specified entity.',
  DUPLICATE_ENTRY: 'Duplicate entry; the data already exists.',
  UNKOWN_ERROR: 'An unknown error occurred.',
  TRANSACTION_FAILED: 'The transaction failed to complete successfully.',
  SOMETHING_WENT_WRONG: 'Something went wrong during the process.',
  SERVER_SIDE_ERROR: 'There is an error on the server side.',
}
module.exports = {
  GeneralErrorsMessages,
  TaskErrorMessages,
  UserErrorMessages,
  DatabaseErrorMessages,
}
