import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

export const brandColors = { light: "white", dark: "#171717" };

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            background: ${brandColors[colorMode]};
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${brandColors[colorMode]};
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyle;
