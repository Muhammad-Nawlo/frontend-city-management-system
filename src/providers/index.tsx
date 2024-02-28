import { ReactNode } from "react";
import QueryClientProvider from "./QueryClientProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};

export default Providers;
