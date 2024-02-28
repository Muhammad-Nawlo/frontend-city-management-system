import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const AppErrorBoundray = () => {
  const error: unknown = useRouteError();
  console.error(error);

  let title: string = "Oops! Error!";
  let message: string | null = "Error!";
  let statusCode: number | null = null;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (statusCode === 404) {
      // this is an extra check we don't have to do,
      // unless we didn't use "no match route" approach when creating the routes.
      // here we can redirect to NotFoundPage, or to home, or update message variable with some appropriate content....
      message = "Page Not Found!";
    } else {
      // Check for other possible status codes..
      // Other status codes may occur when a response is thrown from an "action" or "loader".
      message =
        error.data?.message || error.data || "A Response has been thrown.";
    }
    title = `Oops! ${statusCode}`;
  } else if (error instanceof Error) {
    // Unexpected Error, errors that occur in rendered components
    message = error.message;
    title = `Oops! Unexpected Error`;
  }

  return (
    <div className="flex-center flex-col gap-2 min-h-svh">
      <h1 className="font-bold text-red-950 text-4xl pb-2 border-b border-gray-300">
        {title}
      </h1>
      <p className="text-red-500">
        {statusCode ? statusCode : "Something went wrong."}
      </p>
      <p className="text-xl text-red-950 border border-red-200 rounded-lg bg-red-50 px-4 py-2">
        <i>{message}</i>
      </p>
    </div>
  );
};

export default AppErrorBoundray;
