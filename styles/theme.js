import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

import { brandColors } from "./GlobalStyle";

const config = { ...chakraTheme.config, useSystemColorMode: true };

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

const colors = { ...chakraTheme.colors, brand: brandColors };

const overrides = { ...chakraTheme, config, fonts, colors };

export default extendTheme(overrides);
