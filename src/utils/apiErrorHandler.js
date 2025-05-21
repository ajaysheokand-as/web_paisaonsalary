// utils/apiErrorHandler.js
export function apiErrorResponse(res, error, status = 500) {
  return Response.json(
    {
      success: false,
      message: error?.message || 'Internal Server Error',
      details: error?.raw || null,
    },
    { status }
  );
}
