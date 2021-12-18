import { Box, Container } from "@chakra-ui/layout";

import Header from "./Header";

type props = {
  children: React.ReactNode;
};

const Layout = (props: props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Box as="main" paddingTop="calc(2rem + 48px)">
        <Container maxW="container.lg">{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
