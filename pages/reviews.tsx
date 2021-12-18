import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import Layout from "../components/Layout";

const Reviews = () => {
  const { t } = useTranslation("common");

  return <Layout>{t("reviews")}</Layout>;
};

export default Reviews;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
