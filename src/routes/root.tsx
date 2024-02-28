import { lazy } from "react";
import { Route } from "react-router-dom";

import RootLayout from "@/layouts/root";

const Home = lazy(() => import("../pages/root/Home"));

const RootRoutes = () => (
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />;
  </Route>
);

export default RootRoutes;
