import { Heading, Grid, Box, Text, Flex } from "@chakra-ui/layout";
import { map } from "ramda";
import { Eye, FastForward, Gift, Shield } from "react-feather";
import { useTranslation } from "react-i18next";

const FEATURES = [
  {
    title: "features-secure",
    text: "features-secure-desc",
    icon: <Shield size={32} color="#f82b60" />,
  },
  {
    title: "features-transparent",
    text: "features-transparent-desc",
    icon: <Eye size={32} color="#ff6f2c" />,
  },
  {
    title: "features-free",
    text: "features-free-desc",
    icon: <Gift size={32} color="#fcb400" />,
  },
  {
    title: "features-fast",
    text: "features-fast-desc",
    icon: <FastForward size={32} color="#20c933" />,
  },
];

const Features = () => {
  const { t } = useTranslation();
  return (
    <Box as="section">
      <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gap="4">
        {map(
          (item) => (
            <Flex key={item.title} flexDirection="column">
              {item.icon}
              <Heading mb="4">{t(item.title)}</Heading>
              <Text>{t(item.text)}</Text>
            </Flex>
          ),
          FEATURES
        )}
      </Grid>
    </Box>
  );
};

export default Features;
