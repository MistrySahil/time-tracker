const TaskErrors = {
  TASK_NOT_FOUND: 'TASK_NOT_FOUND',
  TASK_IS_ALREADY_COMPLETED: 'TASK_IS_ALREADY_COMPLETED',
  TASK_IS_ALREADY_RUNNING: 'TASK_IS_ALREADY_RUNNING',
}
const GeneralErrors = {
  INVALID_REQUEST_BODY: 'INVALID_REQUEST_BODY',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
}

const UserErrors = {
  TOKEN_NOT_FOUND: 'TOKEN_NOT_FOUND',
  INVALID_EMAIL_PASSWORD: 'INVALID_EMAIL_PASSWORD',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  USER_ALREADY_EXIST: 'USER_ALREADY_EXIST',
  INVALID_TOKEN: 'INVALID_TOKEN',
}

const DatabaseErrors = {
  TRANSACTION_FAILED: 'TRANSACTION_FAILED'
}

module.exports = {
  TaskErrors,
  GeneralErrors,
  UserErrors,
  DatabaseErrors
}