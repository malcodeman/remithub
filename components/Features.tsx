import { Heading, Grid, Box, Text, Flex } from "@chakra-ui/layout";
import { map } from "ramda";

const FEATURES = [
  {
    title: "Secure",
    text: "We only recommend regulated and secure companies.",
    emoji: null,
  },
  {
    title: "Transparent",
    text: "Affiliate commissions we may receive never impact our independence",
    emoji: null,
  },
  {
    title: "Free forever",
    text: "Anyone can compare and save.",
    emoji: null,
  },
  {
    title: "Fast",
    text: "Statically-rendered pages.",
    emoji: null,
  },
];

const Features = () => {
  return (
    <Box as="section">
      <Grid templateColumns={["1fr", "1fr 1fr 1fr 1fr"]} gap="4">
        {map(
          (item) => (
            <Flex key={item.title} flexDirection="column">
              {item.emoji}
              <Heading mb="4">{item.title}</Heading>
              <Text>{item.text}</Text>
            </Flex>
          ),
          FEATURES
        )}
      </Grid>
    </Box>
  );
};

export default Features;
