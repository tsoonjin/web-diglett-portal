import { VStack, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <VStack>
      <Heading as="h1" size="lg">
        <Link href="/">Diglett</Link>
      </Heading>
      <Heading as="h5" size="xs" color="gray.500">
        Treasure trove of interesting images & videos
      </Heading>
    </VStack>
  );
};

export default Header;
