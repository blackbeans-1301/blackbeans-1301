import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import type { AppProps } from "next/app";
import theme from "@/lib/theme";
import Fonts from "@/components/fonts";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}
