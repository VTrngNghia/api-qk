enum EHttpCode {
  OK = 200,
  WAIT_CONTENT = 204,
  MULTIPLE_CHOICES = 300,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401, // requires client to /auth/login
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  REQUEST_TIMEOUT = 408,
  WORKSPACE_DISABLED = 418, // requires client to go back to workspaces -> choose workspace
  ACCESS_TOKEN_EXPIRED = 499, // requires client to /auth/refresh-token
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  SERVICE_UNAVAILABLE = 503,
}

export default EHttpCode;
