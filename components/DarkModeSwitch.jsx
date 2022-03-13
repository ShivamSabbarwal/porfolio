import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return <IconButton aria-label="Toggle dark mode" icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} color={useColorModeValue("black", "white")} />;
}
