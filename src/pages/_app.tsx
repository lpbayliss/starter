import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { type AppType } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


import { api } from "~/utils/api";

import theme from "~/theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS theme={theme}>
        {process.env.NODE_ENV !== "production" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
