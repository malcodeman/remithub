import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box as="footer">
      <Flex alignItems="center">
        <Image src="flag.png" height="24px" mr="2" alt="" />
        <Text fontWeight="bold">{t("footer-made-in-bih")}</Text>
      </Flex>
      <Divider marginY="4" />
      <Text fontWeight="bold" mb="2">
        {t("affiliate-disclosure")}
      </Text>
      <Text opacity="0.6">{t("affiliate-disclosure-desc")}</Text>
    </Box>
  );
};

export default Footer;
