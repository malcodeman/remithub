import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";

const About = () => {
  const { t } = useTranslation("common");

  return <Layout>{t("about")}</Layout>;
};

export default About;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
