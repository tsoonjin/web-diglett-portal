import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" h="24px">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="https://diglett.dev" isExternal rel="noopener noreferrer">
          diglett.dev
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
