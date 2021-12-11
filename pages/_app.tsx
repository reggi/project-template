import * as React from "react";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import { AppProps } from "next/app";
import Head from "next/head";

const theme = {
  ...DefaultTheme,
};

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Change title in _app.tsx</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <PaperProvider theme={theme}>
        <Component {...pageProps} />
      </PaperProvider>
    </>
  );
}
