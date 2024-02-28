import { ReactNode } from "react";
import {
  QueryClientProvider as QCProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: Props) => {
  return (
    <QCProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QCProvider>
  );
};

export default QueryClientProvider;
