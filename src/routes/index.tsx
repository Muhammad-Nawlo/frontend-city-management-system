import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootRoutes from "@/routes/root";
import AppErrorBoundray from "@/components/error-boundries/AppErrorBoundray";
import AuthenticatedRoute from "@/components/routes/AuthenticatedRoute";

/*
// we are using 'createBrowserRouter' to:
// 1) Take advantage of 'errorElement' with error handling, as it's easier to use API abstraction than implementing the catch/handling logic in a custom error boundary component (React class component only)
// 2) Render more specific and useful UI when an error is thrown.
*/

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Outlet />} errorElement={<AppErrorBoundray />}>
      {/* Authenticated Routes */}
      <Route element={<AuthenticatedRoute />}>
        {/* add private routes here */}
      </Route>
      {/* Public Routes */}
      {RootRoutes()}
      {/* no match route, show NotFoundPage or redirect to Home */}
      {/* 1) show NotFoundPage (add 404page component instead of 'p' tag) */}
      {/* <Route path="*" element={<p>Not Found Page</p>} /> */}
      {/* 2) redirect to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);
