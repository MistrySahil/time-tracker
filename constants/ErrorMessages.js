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
module.exports = {
  GeneralErrorsMessages,
  TaskErrorMessages,
  UserErrorMessages,
}
