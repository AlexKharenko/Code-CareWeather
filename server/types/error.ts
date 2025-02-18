export interface FetchError extends Error {
  statusCode?: number; // HTTP status code (e.g., 400, 404, 500)
  statusMessage?: string; // Error message from the server
  data?: any; // Additional response data (e.g., error details)
}
