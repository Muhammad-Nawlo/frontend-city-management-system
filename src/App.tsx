import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import AppLoader from "@/components/loaders/AppLoader";
import { router } from "@/routes";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <Suspense fallback={<AppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  );
}

export default App;
