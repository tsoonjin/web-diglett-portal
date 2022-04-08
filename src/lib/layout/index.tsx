import { Flex, Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Flex
          as="main"
          marginY={22}
          minH="calc(100vh - 46px)"
          w="100%"
          justify="space-around"
        >
          {children}
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
