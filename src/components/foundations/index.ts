import * as StyledComponents from "styled-components";

const { default: styled, ThemeProvider } =
  StyledComponents as StyledComponents.ThemedStyledComponentsModule<
    typeof theme
  >;

import theme from "./theme";
import GlobalStyles from "./globals";

export { styled, ThemeProvider, theme, GlobalStyles };
