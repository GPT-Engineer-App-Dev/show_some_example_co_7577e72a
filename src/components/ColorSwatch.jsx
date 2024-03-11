import React from "react";
import { Box } from "@chakra-ui/react";

const ColorSwatch = ({ hexCode }) => {
  return <Box w="50px" h="50px" borderRadius="md" boxShadow="md" backgroundColor={`#${hexCode}`} dangerouslySetInnerHTML={{ __html: `<span style="color: white;">${hexCode}</span>` }} />;
};

export default ColorSwatch;
