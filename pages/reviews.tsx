import { Box, Center, Container, Text } from "@chakra-ui/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import Contruction from "../illustrations/Construction";

import Layout from "../components/Layout";

const Reviews = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <Container maxW="container.sm">
        <Center mb="4">
          <Box maxW="sm">
            <Contruction />
          </Box>
        </Center>
        <Text textAlign="center">
          {t("we-are-sorry-this-page-is-work-in-progress")}
        </Text>
      </Container>
    </Layout>
  );
};

export default Reviews;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
