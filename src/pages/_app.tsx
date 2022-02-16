import { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ThemeProvider, theme, GlobalStyles } from "@components/foundations";

import store from "@store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
