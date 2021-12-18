import { Avatar } from "@chakra-ui/avatar";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import constants from "../lib/constants";

import Layout from "../components/Layout";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <Container maxW="container.sm">
        <Box>
          <Heading mb="4">{t("about-heading")}</Heading>
          <Text mb="8">{t("about-subheading")}</Text>
          <Heading mb="4">{t("about-save-money")}</Heading>
          <Text mb="8">{t("about-save-money-desc")}</Text>
          <Heading mb="4">{t("team")}</Heading>
          <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} gridGap="2">
            <Box>
              <Avatar name={constants.TEAM.AMER} src="/amer.jpg" />
              <Text>
                {constants.TEAM.AMER}, {t("software-engineer")}
              </Text>
            </Box>
            <Box>
              <Avatar name={constants.TEAM.MERSIHA} src="/mersiha.jpg" />
              <Text>
                {constants.TEAM.MERSIHA}, {t("data-science")}
              </Text>
            </Box>
            <Box>
              <Avatar name={constants.TEAM.MERIMA} src="/merima.jpg" />
              <Text>
                {constants.TEAM.MERIMA}, {t("software-engineer")}
              </Text>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
